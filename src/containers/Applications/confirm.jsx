import { Modal, Button, Form,Radio ,Input} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import React ,{useState}from 'react'
import { Card } from 'antd';
import axios from "../../library/helpers/axios";
import { toast } from "react-toastify";
import config,{status} from "./config";
import { useSelector } from "react-redux";

const { confirm } = Modal;
const { Meta } = Card;



export default function Confirm({data:{documents,id},setFetcher}) {
  const token = useSelector((state) => state.Auth.idToken);

   const [isModalVisible, setIsModalVisible] = useState(false);
   const [type, setType] = useState(1);
   const [form] = Form.useForm();

   const showModal = () => {
     setIsModalVisible(true);
   };
 
   const handleOk = () => {
     form
     .validateFields()
     .then(values => {
  // axios[config.api.validate?.[0]?.method](`${config.api.validate?.[1]}${id}/reject`, {

      toast.promise(
         axios[config.api.validate?.[0]?.method](`${type==1?config.api.validate?.[1]:'sendNotify/'}${id}`,type==1?{}:values, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         }),
         {
           pending: "Pending",
           success: {
             render(res) {

               setFetcher((fetcher) => !fetcher);

               form.resetFields();
     setIsModalVisible(false);

               return `👌 ${res.data.data.message}`;
             },
             // other options
             icon: "🟢",
           },
           error: {
             render(err) {
               return `🤯 ${
                 err?.data?.response?.data?.message || "Backend Error Occured"
               }`;
             },
             // other options
             //    icon: "🟢",
           },
         }
       );




}).catch(info => {
       console.log('Validate Failed:', info);
     });
   };
 
   const handleCancel = () => {
     setIsModalVisible(false);
   };



return (<>
  <Button onClick={showModal}>Check</Button>

 <Modal title="Check Documents" 
 visible={isModalVisible} 
 okText="Confirm"
 onOk={handleOk} 
 onCancel={handleCancel}
 >
     <div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5}}> 
<div>
{
  documents?.map((e)=> <a target="_blank" href={e?.url?e.url:"#"}> 
   <Card
     hoverable
     style={{ width: 200 ,display:"inline-block"}}
     cover={<img alt={e.type.replaceAll("_"," ")} height={70}  src="https://s1.eestatic.com/2018/05/02/actualidad/actualidad_304233531_130193551_1024x576.jpg" />}
   > <div style={{margin:"-13px -20px", textAlign:"center"}}>{e.type.replaceAll("_"," ")}  </div>
   </Card>
   </a> )
 }
</div>

        <Radio.Group defaultValue={type} onChange={(e)=>{
           console.log(e.target.value)
setType(e.target.value)
        }}> 
         <Radio value={1}>Accept</Radio>
         <Radio value={2}>Document Problem</Radio>
       </Radio.Group>
</div>

 <Form
     form={form}
     layout="vertical"
     name="form_in_modal"
   >


{type==2&&  <Form.Item name="text" label="Notify User"
             rules={[{ required: true, message: 'Please input notify message!' }]}

     >
       <Input.TextArea type="textarea" />
     </Form.Item>}
 
   </Form>

     </div>
 </Modal>
   </>
);
}
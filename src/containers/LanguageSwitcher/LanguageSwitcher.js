import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IntlMessages from '@iso/components/utility/intlMessages';
import actions from '@iso/redux/languageSwitcher/actions';
import config from './config';
import { Button, Tooltip ,Radio} from 'antd';
const { changeLanguage } = actions;

export default function LanguageSwitcher() {
  const { language } = useSelector(state => state.LanguageSwitcher);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign:'center', margin:'5px 0px '}} className="themeSwitchBlock">
      <h4 style={{marginRight:'0px'}} >
        <IntlMessages id="languageSwitcher.label" />
      </h4>
      <div style={{textAlign:'center',marginRight:'0px', marginTop:'10px'}} className="themeSwitchBtnWrapper">
     
     
      <Radio.Group
                      onChange={(e)=>{
                        window.location.reload();
                
                          localStorage.setItem('lang', e.target.value);
                        
                      }}
                      value={localStorage.getItem('lang')}
                    >
               

                      <Radio.Button value="ar">
                   ع
                        </Radio.Button>





                      <Radio.Button value="en">
                     En

                        </Radio.Button>
               

             
                    </Radio.Group>
     
     
      </div>
    </div>
  );
}

import React, { lazy, Suspense } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
 import Loader from "@iso/components/utility/loader";
// import Loader from "@iso/Mcomponents/extended/Loader/Loader";
import { getPermissions } from "@iso/config/permissions";
// list: 1, update: 1 ,delete ,  create: 1
const routes = {
  home: {
    path: "",
    component: lazy(() => import("@iso/containers/Home/index")),
    exact: true,
    // dynamic permission to make route available or not true or false
    show: true,
  },

  ///  countries
  Countries: {
    path: "Countries",
    component: lazy(() => import("@iso/containers/Countries/index")),
    exact: true,
    show: getPermissions("country", "list"),
  },
  CountriesNew: {
    path: "Country/new-country",
    component: lazy(() => import("@iso/containers/Countries/add")),
    exact: true,
    show: getPermissions("country", "create"),
  },
  CountriesEdit: {
    path: "Country/edit-country/:id",
    component: lazy(() => import("@iso/containers/Countries/add")),
    exact: true,
    show: getPermissions("country", "update"),
  },
  CountriesShow: {
    path: "Country/:id",
    component: lazy(() => import("@iso/containers/Countries/details")),
    exact: true,
    show: getPermissions("country", "list"),
  },

  ///  cities
  Cities: {
    path: "Cities",
    component: lazy(() => import("@iso/containers/Cities/index")),
    exact: true,
    show: getPermissions("city", "list"),
  },
  CitiesNew: {
    path: "City/new-city",
    component: lazy(() => import("@iso/containers/Cities/add")),
    exact: true,
    show: getPermissions("city", "create"),
  },
  CitiesEdit: {
    path: "City/edit-city/:id",
    component: lazy(() => import("@iso/containers/Cities/add")),
    exact: true,
    show: getPermissions("city", "update"),
  },
  CitiesShow: {
    path: "City/:id",
    component: lazy(() => import("@iso/containers/Cities/details")),
    exact: true,
    show: getPermissions("city", "list"),
  },
  ///  area
  Regions: {
    path: "Regions",
    component: lazy(() => import("@iso/containers/Regions/index")),
    exact: true,
    show: getPermissions("area", "list"),
  },
  RegionsNew: {
    path: "Regions/new-region",
    component: lazy(() => import("@iso/containers/Regions/add")),
    exact: true,
    show: getPermissions("area", "create"),
  },
  RegionsEdit: {
    path: "Regions/edit-region/:id",
    component: lazy(() => import("@iso/containers/Regions/add")),
    exact: true,
    show: getPermissions("area", "update"),
  },
  RegionsShow: {
    path: "Regions/:id",
    component: lazy(() => import("@iso/containers/Regions/details")),
    exact: true,
    show: getPermissions("area", "list"),
  },

  // permission
  permissions: {
    path: "permissions",
    component: lazy(() => import("@iso/containers/permissions")),
    exact: true,
    show: getPermissions("permission", "list"),
  },
  permissionsNew: {
    path: "permissions/new-permission",
    component: lazy(() => import("@iso/containers/permissions/add")),
    exact: true,
    show: getPermissions("permission", "create"),
  },
  permissionsEdit: {
    path: "permissions/edit-permission/:id",
    component: lazy(() => import("@iso/containers/permissions/add")),
    exact: true,
    show: getPermissions("permission", "update"),
  },
  permissionsShow: {
    path: "permissions/:id",
    component: lazy(() => import("@iso/containers/permissions/details")),
    exact: true,
    show: getPermissions("permission", "list"),
  },

  admins: {
    path: "admins",
    component: lazy(() => import("@iso/containers/admins")),
    exact: true,
    show: getPermissions("user", "list"),
  },
  adminsNew: {
    path: "admins/new-admin",
    component: lazy(() => import("@iso/containers/admins/add")),
    exact: true,
    show: getPermissions("user", "create"),
  },
  adminsEdit: {
    path: "admins/edit-admin/:id",
    component: lazy(() => import("@iso/containers/admins/add")),
    exact: true,
    show: getPermissions("user", "update"),
  },
  adminsShow: {
    path: "admins/:id",
    component: lazy(() => import("@iso/containers/admins/details")),
    exact: true,
    show: getPermissions("user", "list"),
  },

  ///
  clients: {
    path: "clients",
    component: lazy(() => import("@iso/containers/clients")),
    exact: true,
    show: getPermissions("users", "list"),
  },
  clientsNew: {
    path: "clients/new-client",
    component: lazy(() => import("@iso/containers/clients/add")),
    exact: true,
    show: getPermissions("users", "create"),
  },
  clientsEdit: {
    path: "clients/edit-client/:id",
    component: lazy(() => import("@iso/containers/clients/add")),
    exact: true,
    show: getPermissions("users", "update"),
  },
  clientsShow: {
    path: "clients/:id",
    component: lazy(() => import("@iso/containers/clients/details")),
    exact: true,
    show: getPermissions("users", "list"),
  },
  ////
  roles: {
    path: "roles",
    component: lazy(() => import("@iso/containers/roles")),
    exact: true,
    show: getPermissions("role", "list"),
  },
  rolesNew: {
    path: "roles/new-role",
    component: lazy(() => import("@iso/containers/roles/add")),
    exact: true,
    show: getPermissions("role", "create"),
  },
  rolesEdit: {
    path: "roles/edit-role/:id",
    component: lazy(() => import("@iso/containers/roles/add")),
    exact: true,
    show: getPermissions("role", "update"),
  },
  rolesShow: {
    path: "roles/:id",
    component: lazy(() => import("@iso/containers/roles/details")),
    exact: true,
    show: getPermissions("role", "list"),
  },
  ///
  Logs: {
    path: "Logs",
    component: lazy(() => import("@iso/containers/Logs")),
    exact: true,
    show: getPermissions("log", "list"),
  },
  LogsNew: {
    path: "Logs/new-log",
    component: lazy(() => import("@iso/containers/Logs/add")),
    exact: true,
    show: getPermissions("log", "create"),
  },
  LogsEdit: {
    path: "Logs/edit-log/:id",
    component: lazy(() => import("@iso/containers/Logs/add")),
    exact: true,
    show: getPermissions("log", "update"),
  },
  LogsShow: {
    path: "Logs/:id",
    component: lazy(() => import("@iso/containers/Logs/details")),
    exact: true,
    show: getPermissions("log", "list"),
  },






    //Doctors/
    Doctors: {
      path: "Doctors",
      component: lazy(() => import("@iso/containers/Doctors")),
      exact: true,
      show: getPermissions("doctor", "list"),
    },
    DoctorsNew: {
      path: "Doctors/new-doctor",
      component: lazy(() => import("@iso/containers/Doctors/add")),
      exact: true,
      show: getPermissions("doctor", "create"),
    },
    DoctorsEdit: {
      path: "Doctors/edit-doctor/:id",
      component: lazy(() => import("@iso/containers/Doctors/add")),
      exact: true,
      show: getPermissions("doctor", "update"),
    },
    DoctorsShow: {
      path: "Doctors/:id",
      component: lazy(() => import("@iso/containers/Doctors/details")),
      exact: true,
      show: getPermissions("doctor", "list"),
    },

    //Patients/
    Patients: {
      path: "Patients",
      component: lazy(() => import("@iso/containers/Patients")),
      exact: true,
      show: getPermissions("patient", "list"),
    },
    PatientsNew: {
      path: "Patients/new-patient",
      component: lazy(() => import("@iso/containers/Patients/add")),
      exact: true,
      show: getPermissions("patient", "create"),
    },
    PatientsEdit: {
      path: "Patients/edit-patient/:id",
      component: lazy(() => import("@iso/containers/Patients/add")),
      exact: true,
      show: getPermissions("patient", "update"),
    },
    PatientsShow: {
      path: "Patients/:id",
      component: lazy(() => import("@iso/containers/Patients/details")),
      exact: true,
      show: getPermissions("patient", "list"),
    },




  /// ContactTypes
  ContactTypes: {
    path: "ContactTypes",
    component: lazy(() => import("@iso/containers/ContactTypes")),
    exact: true,
    show: getPermissions("contactTypes", "list"),
  },
  ContactTypesNew: {
    path: "ContactTypes/new-contact-type",
    component: lazy(() => import("@iso/containers/ContactTypes/add")),
    exact: true,
    show: getPermissions("contactTypes", "create"),
  },
  ContactTypesEdit: {
    path: "ContactTypes/edit-contact-type/:id",
    component: lazy(() => import("@iso/containers/ContactTypes/add")),
    exact: true,
    show: getPermissions("contactTypes", "update"),
  },
  ContactTypesShow: {
    path: "ContactTypes/:id",
    component: lazy(() => import("@iso/containers/ContactTypes/details")),
    exact: true,
    show: getPermissions("contactTypes", "list"),
  },

  /// ContactUs
  ContactUs: {
    path: "ContactUs",
    component: lazy(() => import("@iso/containers/ContactUs")),
    exact: true,
    show: getPermissions("contacts", "list"),
  },
  ContactUsNew: {
    path: "ContactUs/new-contactus",
    component: lazy(() => import("@iso/containers/ContactUs/add")),
    exact: true,
    show: getPermissions("contacts", "create"),
  },
  ContactUsEdit: {
    path: "ContactUs/edit-contactus/:id",
    component: lazy(() => import("@iso/containers/ContactUs/add")),
    exact: true,
    show: getPermissions("contacts", "update"),
  },
  ContactUsShow: {
    path: "ContactUs/:id",
    component: lazy(() => import("@iso/containers/ContactUs/details")),
    exact: true,
    show: getPermissions("contacts", "list"),
  },

  /// branches
  Branches: {
    path: "Branches",
    component: lazy(() => import("@iso/containers/Branches")),
    exact: true,
    show: getPermissions("branches", "list"),
  },
  BranchesNew: {
    path: "Branches/new-branch",
    component: lazy(() => import("@iso/containers/Branches/add")),
    exact: true,
    show: getPermissions("branches", "create"),
  },
  BranchesEdit: {
    path: "Branches/edit-branch/:id",
    component: lazy(() => import("@iso/containers/Branches/add")),
    exact: true,
    show: getPermissions("branches", "update"),
  },
  BranchesShow: {
    path: "Branches/:id",
    component: lazy(() => import("@iso/containers/Branches/details")),
    exact: true,
    show: getPermissions("branches", "list"),
  },

  /// Products
  Products: {
    path: "Products",
    component: lazy(() => import("@iso/containers/Products")),
    exact: true,
    show: getPermissions("productInformation", "list"),
  },
  ProductsNew: {
    path: "Products/new-product",
    component: lazy(() => import("@iso/containers/Products/add")),
    exact: true,
    show: getPermissions("productInformation", "create"),
  },
  ProductsEdit: {
    path: "Products/edit-product/:id",
    component: lazy(() => import("@iso/containers/Products/add")),
    exact: true,
    show: getPermissions("productInformation", "update"),
  },
  ProductsShow: {
    path: "Products/:id",
    component: lazy(() => import("@iso/containers/Products/details")),
    exact: true,
    show: getPermissions("productInformation", "list"),
  },

  // Applications
  Applications: {
    path: "Applications",
    component: lazy(() => import("@iso/containers/Applications")),
    exact: true,
    show: getPermissions("applications", "list"),
  },
  ApplicationsNew: {
    path: "Applications/new-application",
    component: lazy(() => import("@iso/containers/Applications/add")),
    exact: true,
    show: getPermissions("applications", "create"),
  },
  ApplicationsEdit: {
    path: "Applications/edit-application/:id",
    component: lazy(() => import("@iso/containers/Applications/add")),
    exact: true,
    show: getPermissions("applications", "update"),
  },
  ApplicationsShow: {
    path: "Applications/:id",
    component: lazy(() => import("@iso/containers/Applications/details")),
    exact: true,
    show: getPermissions("applications", "list"),
  },

  // Applications
  RetentionTimes: {
    path: "RetentionTimes",
    component: lazy(() => import("@iso/containers/RetentionTimes")),
    exact: true,
    show: getPermissions("RetentionTimes", "list"),
  },

  RetentionTimesEdit: {
    path: "RetentionTimes/edit-retention/:id",
    component: lazy(() => import("@iso/containers/RetentionTimes/add")),
    exact: true,
    show: getPermissions("RetentionTimes", "update"),
  },

  // userRequests
  userRequests: {
    path: "userRequests",
    component: lazy(() => import("@iso/containers/userRequests")),
    exact: true,
    show: getPermissions("userRequests", "list"),
  },

  ///  PurposeFinances
  PurposeFinances: {
    path: "PurposeFinances",
    component: lazy(() => import("@iso/containers/PurposeFinances/index")),
    exact: true,
    show: getPermissions("purposeFinances", "list"),
  },
  PurposeFinancesNew: {
    path: "PurposeFinances/new-purposeFinance",
    component: lazy(() => import("@iso/containers/PurposeFinances/add")),
    exact: true,
    show: getPermissions("purposeFinances", "create"),
  },
  PurposeFinancesEdit: {
    path: "PurposeFinances/edit-purposeFinance/:id",
    component: lazy(() => import("@iso/containers/PurposeFinances/add")),
    exact: true,
    show: getPermissions("purposeFinances", "update"),
  },
  PurposeFinancesShow: {
    path: "PurposeFinances/:id",
    component: lazy(() => import("@iso/containers/PurposeFinances/details")),
    exact: true,
    show: getPermissions("purposeFinances", "list"),
  },

  ///  Companies
  Companies: {
    path: "Companies",
    component: lazy(() => import("@iso/containers/Companies/index")),
    exact: true,
    show: getPermissions("company", "list"),
  },
  CompaniesNew: {
    path: "Companies/new-company",
    component: lazy(() => import("@iso/containers/Companies/add")),
    exact: true,
    show: getPermissions("company", "create"),
  },
  CompaniesEdit: {
    path: "Companies/edit-company/:id",
    component: lazy(() => import("@iso/containers/Companies/add")),
    exact: true,
    show: getPermissions("company", "update"),
  },
  CompaniesShow: {
    path: "Companies/:id",
    component: lazy(() => import("@iso/containers/Companies/details")),
    exact: true,
    show: getPermissions("company", "list"),
  },
  ///  Bank
  Bank: {
    path: "Bank",
    component: lazy(() => import("@iso/containers/Bank/index")),
    exact: true,
    show: getPermissions("bank", "list"),
  },
  BankNew: {
    path: "Bank/new-bank",
    component: lazy(() => import("@iso/containers/Bank/add")),
    exact: true,
    show: getPermissions("bank", "create"),
  },
  BankEdit: {
    path: "Bank/edit-bank/:id",
    component: lazy(() => import("@iso/containers/Bank/add")),
    exact: true,
    show: getPermissions("bank", "update"),
  },
  BankShow: {
    path: "Bank/:id",
    component: lazy(() => import("@iso/containers/Bank/details")),
    exact: true,
    show: getPermissions("bank", "list"),
  },

  //Occupation
  Occupations: {
    path: "Occupations",
    component: lazy(() => import("@iso/containers/Occupations/index")),
    exact: true,
    show: getPermissions("occupation", "list"),
  },
  OccupationsNew: {
    path: "Occupations/new-occupation",
    component: lazy(() => import("@iso/containers/Occupations/add")),
    exact: true,
    show: getPermissions("occupation", "create"),
  },
  OccupationsEdit: {
    path: "Occupations/edit-occupation/:id",
    component: lazy(() => import("@iso/containers/Occupations/add")),
    exact: true,
    show: getPermissions("occupation", "update"),
  },
  OccupationsShow: {
    path: "Occupations/:id",
    component: lazy(() => import("@iso/containers/Occupations/details")),
    exact: true,
    show: getPermissions("occupation", "list"),
  },

  // socials
  socials: {
    path: "socials",
    component: lazy(() => import("@iso/containers/socials")),
    exact: true,
    show: getPermissions("social", "list"),
  },
  socialsNew: {
    path: "socials/new-social",
    component: lazy(() => import("@iso/containers/socials/add")),
    exact: true,
    show: getPermissions("social", "create"),
  },
  socialsEdit: {
    path: "socials/edit-social/:id",
    component: lazy(() => import("@iso/containers/socials/add")),
    exact: true,
    show: getPermissions("social", "update"),
  },
  socialsShow: {
    path: "socials/:id",
    component: lazy(() => import("@iso/containers/socials/details")),
    exact: true,
    show: getPermissions("social", "list"),
  },
};
export { routes };
export default function AppRouter() {
  const { url } = useRouteMatch();
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {Object.values(routes).map((route, idx) =>
          route.show ? (
            <Route exact={route.exact} key={idx} path={`${url}/${route.path}`}>
              <route.component />
            </Route>
          ) : null
        )}
      </Switch>
    </Suspense>
  );
}

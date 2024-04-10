import { GridColDef } from "@mui/x-data-grid";
import components from "../components/Input";

export type IInputs = {
  row: IFields[];
}
export type IOption  = {
  text: string;
  value: string | number;
}

export type IValidation  = {
  regex?: string;
  min?: number;
  max?: number;
}
export type IFields =  {
  fieldName: string;
  type: any; // components;
  label: string;
  require?: boolean;
  notShowOption?: boolean;
  options?: IOption[];
  validation?: "email" | "date" | IValidation;
  className?: string;
  showTimeSelect?: boolean;
  readOnly?: boolean;
  multiline?: boolean;
  rows?: number;
  dateFormat?: string;
  multiple?: boolean;
  withType?: boolean;
  maxFiles?: number;
  fields?: string[];
  fileTypes?: string[];
  editMode?: string;
  accept?: string;
  maxLength?: number;
  locale?: "he" | "en";
  propsComponent?: any;
  error?: string;
}

export type IObject = {
  title:string
  itemId?: string;
  action: string;
  tableColumn: GridColDef[];
  input: any[];
};
export type IObjectKey = {
  [key: string]: IObject;
};

const CategoryObject: IObject = {
  title:"קטגוריות",
  itemId: "id",
  action: "category",
  tableColumn: [
    {
      headerName: "ID",
      field: "id",
      flex: 1,
    },
    {
      headerName: "שם קטגוריה",
      field: "name",
      flex: 1,
    },
    {
      headerName: "קטגוריה אב",
      field: "categoryId",
      flex: 1,
    },
  ],
  input: [
    {
      row: [
        {
          fieldName: "name",
          type: "text",
          label: "שם קטגוריה",
          required: true,
          readOnly: true,
        },
        {
          fieldName: "categoryId",
          type: "text",
          label: "קטגוריה אב",
          required: true,
          readOnly: true,
        },
      ],
    },
  ],
};
const RoleObject: IObject = {
  title:"Roles",
  itemId: "id",
  action: "role",
  tableColumn: [
    {
      headerName: "ID",
      field: "id",
      flex: 1,
    },
    {
      headerName: "שם",
      field: "name",
      flex: 1,
    },
  ],
  input: [
    {
      row: [
        {
          fieldName: "name",
          type: "text",
          label: "שם",
          required: true,
        },
      ],
    },
  ],
};

const EquipmentObject: IObject = {
  title:"ציוד",

  itemId: "id",
  action: "equipment",
  tableColumn: [
    {
      headerName: "ID",
      field: "id",
      flex: 1,
    },
    {
      headerName: "שם ציוד",
      field: "name",
      flex: 1,
    },
    {
      headerName: "תיאור",
      field: "description",
      flex: 1,
    },
    {
      headerName: "כמות",
      field: "quantity",
      flex: 1,
    },
    {
      headerName: "קטגוריה",
      field: "categoryId",
      flex: 1,
    },
    {
      headerName: "מוצר סיריאלי",
      field: "isSerial",
      flex: 1,
    },
  ],
  input: [
    {
      row: [
        {
          fieldName: "name",
          type: "text",
          label: "שם",
          required: true,
        },
        {
          fieldName: "categoryId",
          type: "select",
          
          options:"category",
          label: "קטגוריה",
          required: true,
        },
      ],
    },
    {
      row: [
        {
          fieldName: "quantity",
          type: "number",
          label: "כמות",
        },

        {
          fieldName: "isSerial",
          type: "switch",
          label: "מוצר סיריאלי",
        },
      ],
    },
    {
      row: [
        {
          fieldName: "description",
          type: "text",
          label: "תיאור",
        },
      ],
    },
  ],
};
const CompanyObject: IObject = {
  title:"חברות",

  itemId: "id",
  action: "company",
  tableColumn: [
    {
      headerName: "ID",
      field: "id",
      flex: 1,
    },
    {
      headerName: "שם חברה",
      field: "name",
      flex: 1,
    },
  
  ],
  input: [
    {
      row: [
        {
          fieldName: "name",
          type: "text",
          label: "שם",
          required: true,
        },
      
      ],
    }
  ],
};
const WorkerObject: IObject = {
  title:"עובדים",
  itemId: "id",
  action: "worker",
  tableColumn: [
    {
      headerName: "ID",
      field: "id",
      flex: 1,
    },
    {
      headerName: "מספר עובד",
      field: "workerNumber",
      flex: 1,
    },
    {
      headerName: "שם פרטי",
      field: "firstName",
      flex: 1,
    },
    {
      headerName: "שם משפחה",
      field: "lastName",
      flex: 1,
    },
    {
      headerName: "מזהה חברה",
      field: "companyId",
      flex: 1,
    },
  
  ],
  input: [
    {
      row: [
        {
          fieldName: "workerNumber",
          type: "number",
          label: "מספר עובד",
          required: true,
        },
        {
          fieldName: "companyId",
          type: "number",
          label: "מזהה חברה",
          required: true,
        },
    
      ],
    },
    {
      row: [
        {
          fieldName: "firstName",
          type: "text",
          label: "שם פרטי",
          required: true,
        },
        {
          fieldName: "lastName",
          type: "text",
          label: "שם משפחה",
          required: true,
        },
    
      ],
    }
  ],
};
export const allDataLayout: IObjectKey = {
  "/category": CategoryObject,
  "/role": RoleObject,
  "/equipment": EquipmentObject,
  "/company": CompanyObject,
  "/worker": WorkerObject,
};


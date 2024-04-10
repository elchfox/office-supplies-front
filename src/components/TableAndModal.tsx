import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table";
import { RootState } from "../store";
import { apiCreate, apiDelete, apiUpdate } from "../store/thunks//apiData";
import { IObject } from "../utils/layoutTable";
import FormData from "./FormData";
import { setStatusApi } from "../store/apiSlice";


type TableAndModalProps = {
    dataLayout: IObject,
    data: any[],
    title?: string
}

const TableAndModal: React.FC<TableAndModalProps> = ({ dataLayout, data, title }) => {
    const { status } = useSelector((state: RootState) => state.api)

    const [open, setOpen] = useState(false);
    const [editData, setEditData] = useState<any>({});
    const dispatch = useDispatch<any>();


    const onReset = () => {
        setTimeout(() => {
            dispatch(setStatusApi("idle"))
            setOpen(false);
            setEditData({})
        }, 1000);

    }

    useEffect(() => {
        if (status === "succeeded") {
            onReset()
        }
    }, [status]);
    
    const onSubmit = (itemData: any) => {
        if (itemData?.id) {
            dispatch(apiUpdate({ endpoint: `${dataLayout.action}/${itemData.id}`, data: itemData }))
        } else {
            dispatch(apiCreate({ endpoint: dataLayout.action, data: itemData }))

        }
    }
    const onDelete = (itemData: any) => {
        dispatch(apiDelete({ endpoint: `${dataLayout.action}/${itemData.id}` }))
    }
    return (<div>
        {open &&
            <FormData inputs={dataLayout.input} open={true}
                title={title}
                onSubmit={onSubmit}
                onDelete={onDelete}
                statusResponse={status === "loading"}
                onClose={() => setOpen(false)}
                action={dataLayout.action} data={editData} mode={editData?.id ? "edit" : "create"} />
        }

        {data && <Table columns={dataLayout.tableColumn} rows={data} getRowId={(e) => e.id}
            onAddNew={() => {
                setOpen(true);
                setEditData({})
            }} onRowClick={(e) => {
                setOpen(true)
                setEditData(e.row)
            }} />}
    </div>);
};

export default TableAndModal;
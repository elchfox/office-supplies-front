import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableAndModal from "../components/TableAndModal";
import { RootState } from "../store";
import { apiGet } from "../store/thunks/apiData";
import { IObject, allDataLayout } from "../utils/layoutTable";

type BaseLayoutProps = {

} & IObject
const BaseLayout: React.FC<BaseLayoutProps> = ({ action, title }) => {
  const { loading, data } = useSelector((state: RootState) => state.api)
  const dispatch = useDispatch<any>();


  useEffect(() => {
    dispatch(apiGet({ endpoint: action }));
  }, [action])


  if (loading) {
    return <div>Loading...</div>
  }

  const dataLayout = allDataLayout[`/${action}`]
  return (<div>

    <TableAndModal data={data} dataLayout={dataLayout} title={title} />
  </div>);
};

export default BaseLayout;
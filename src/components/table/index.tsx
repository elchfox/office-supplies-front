import { Button } from "@mui/material";
import {
  DataGrid,
  GridColDef,
  GridRowParams,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import React, { MouseEvent, useEffect, useState } from "react";

interface IDataGridCustom {
  newBtn?: boolean;
  rows: any[];
  columns: GridColDef[];
  onRowClick?: (e: GridRowParams) => void;
  getRowId?: (e: GridRowParams) => any;
  onAddNew?: (e: any) => any;
}

const CustomToolbar = (props: any) => {
  const { onAddNew } = props;
  return (
    <GridToolbarContainer
      sx={{ paddingBlock: "1rem", justifyContent: "space-between" }}
    >
      <div>
        <GridToolbarColumnsButton
        //   sx={{
        //     fontSize: "13px",
        //     gap: "0.5rem",
        //     color: "#212B36",
        //     ".MuiSvgIcon-root": { fontSize: "1rem" },
        //   }}
        />
        <GridToolbarFilterButton
        //   sx={{
        //     fontSize: "13px",
        //     gap: "0.5rem",
        //     color: "#212B36",
        //     ".MuiSvgIcon-root": { fontSize: "1rem" },
        //   }}
        />
        <GridToolbarDensitySelector
        //   sx={{
        //     fontSize: "13px",
        //     gap: "0.5rem",
        //     color: "#212B36",
        //     ".MuiSvgIcon-root": { fontSize: "1rem" },
        //   }}
        />
        <GridToolbarExport
          sx={{
            fontSize: "13px",
            gap: "0.5rem",
            color: "#212B36",
            ".MuiSvgIcon-root": { fontSize: "1rem" },
          }}
        />
      </div>

      {onAddNew && (
        <div style={{ padding: "0 11px" }}>
          <Button variant="contained" size="small" onClick={onAddNew}>
            חדש
          </Button>
        </div>
      )}
    </GridToolbarContainer>
  );
};

const Table: React.FC<IDataGridCustom> = (props) => {
  const { rows, columns, onRowClick, getRowId } = props;
  const [pageSize, setPageSize] = React.useState<number>(5);

  return (
    <div style={{ maxHeight: "75vh", height: 2500, width: "100%" }}>
      <DataGrid
        sx={{
          backgroundColor: "white",
          ".MuiDataGrid-toolbarContainer,.MuiDataGrid-columnHeadersInner": {
            backgroundColor: "#F4F6F8",
          },
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "&.MuiDataGrid-root": {
            boxShadow: "0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
            filter: "drop-shadow(0px 0px 2px rgba(145, 158, 171, 0.2))",
            borderRadius: 4,
            overflow: "hidden",
            border: 0,
          },
          ".MuiDataGrid-footerContainer": {
            direction: "ltr",
          },
        }}
        rows={rows}
        columns={columns}
        autoHeight={pageSize === 5}

        slots={{
          toolbar: CustomToolbar,
        }}
        localeText={{
          toolbarColumns: "עמודות",
          toolbarDensity: "צפיפות",
          toolbarFilters: "סינון",
          toolbarExport: "יצוא",
        }}
        slotProps={{
          pagination: {},
          toolbar: {
            onAddNew: props.onAddNew
          },
        }}

        initialState={{

          pagination: {
            paginationModel: { pageSize }
          }
        }}
        onPaginationModelChange={(newPageSize) => setPageSize(newPageSize.pageSize)}
        checkboxSelection={false}
        pageSizeOptions={[5, 10, 20]}
        pagination
        rowHeight={72}
        getRowId={getRowId}
        onRowClick={onRowClick}
      />
    </div>
  );
};

export default Table;

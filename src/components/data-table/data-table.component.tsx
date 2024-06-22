import { DataGrid } from "@mui/x-data-grid";

type DataTableProps = {
  rows: any[];
  columns: any[];
  defaultPageSize?: number;
  "data-testid"?: string;
};

const DataTable = ({
  rows,
  columns,
  defaultPageSize = 5,
  "data-testid": dataTestId = "Data.Table",
}: DataTableProps) => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: defaultPageSize,
          },
        },
      }}
      pageSizeOptions={[5, 10, 25]}
      checkboxSelection
      disableRowSelectionOnClick
      data-testid={dataTestId}
    />
  );
};

export default DataTable;

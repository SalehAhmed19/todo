import { DeleteForever } from "@mui/icons-material";
import React from "react";
import DeleteModal from "./DeleteModal";
import UpdateModal from "./UpdateModal";

const ListItemRow = () => {
  const [layout, setLayout] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);
  const data = [
    { _id: 1, title: "Breakfast", des: "description" },
    { _id: 2, title: "Lunch", des: "description" },
    { _id: 3, title: "Go to Shop", des: "description" },
    { _id: 4, title: "Sleep", des: "description" },
  ];

  return (
    <React.Fragment>
      {data.map((d) => (
        <div
          key={d._id}
          className="p-5 rounded-md bg-[#efefef] my-2 flex justify-between items-center"
        >
          <div>
            <h4 className="font-bold">{d.title}</h4>
            <p className="text-sm">{d.des}</p>
          </div>
          <div>
            <button
              className="bg-[#196DD8] text-[#fff] px-4 py-1 rounded"
              onClick={() => {
                console.log("Update");
                setLayout("fullscreen");
              }}
            >
              Update
            </button>
            <button
              className="bg-[#d81919] text-[#fff] px-4 py-1 rounded ml-3"
              endDecorator={<DeleteForever />}
              onClick={() => {
                console.log("Delete");
                setOpen(true);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <UpdateModal layout={layout} setLayout={setLayout} />
      <DeleteModal open={open} setOpen={setOpen} />
    </React.Fragment>
  );
};

export default ListItemRow;

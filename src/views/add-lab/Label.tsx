import InputLabel from "@mui/material/InputLabel";

type LabelProps = {
  label: string;
};

const Label = ({ label }: LabelProps) => {
  return (
    <InputLabel sx={{ "& span": { color: "red" } }}>
      {label}
      <span>*</span>
    </InputLabel>
  );
};

export default Label;

import { Line, Name, House, ButtonBox } from "./styled";
import InsertPoints from "../insertPoints";

const Student = ({ student }) => {
  return (
    <>
      <Line>
        <Name>{student.name}</Name>
        <House>{student.house}</House>
        <ButtonBox>
          <InsertPoints student={student} />
        </ButtonBox>
      </Line>
    </>
  );
};

export default Student;

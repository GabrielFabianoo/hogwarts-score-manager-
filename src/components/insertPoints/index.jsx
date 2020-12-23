import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  StyledPopup,
  Image,
  Header,
  StudentPic,
  Content,
  BoxLogo,
  HouseLogo,
  HouseName,
  Name,
  BoxPoints,
  Input,
  ButtonsPlace,
  ButtonAdd,
  ButtonRemove,
  DisplayAddPoints,
  DisplayRemovePoints,
  ButtonDone,
} from "./styled";
import { Button } from "../student/styled";
import insertPoints from "../images/apply-points.png";
import Gryffindor from "../images/grifinoria.png";
import Hufflepuff from "../images/lufa-lufa.png";
import Slytherin from "../images/sonserina.png";
import Ravenclaw from "../images/corvinal.png";

import {
  corvinalPointsAddThunk,
  corvinalPointsRemoveThunk,
} from "../../store/modules/corvinal/thunks";
import {
  grifinoriaPointsAddThunk,
  grifinoriaPointsRemoveThunk,
} from "../../store/modules/grifinoria/thunks";
import {
  sonserinaPointsAddThunk,
  sonserinaPointsRemoveThunk,
} from "../../store/modules/sonserina/thunks";
import {
  lufaLufaPointsAddThunk,
  lufaLufaPointsRemoveThunk,
} from "../../store/modules/lufa-lufa/thunks";

const InsertPoints = ({ student }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const [pointsAddded, setPointsAdded] = useState(true);
  const [done, setDone] = useState(true);
  const [house, setHouse] = useState("");

  const findHouse = () => {
    switch (student.house) {
      case "Gryffindor":
        return setHouse(Gryffindor);
      case "Hufflepuff":
        return setHouse(Hufflepuff);
      case "Slytherin":
        return setHouse(Slytherin);
      case "Ravenclaw":
        return setHouse(Ravenclaw);
      default:
        return null;
    }
  };

  const addPoints = () => {
    setPointsAdded(false);
    setDone(true);
  };

  const removePoints = () => {
    setDone(false);
    setPointsAdded(false);
  };

  const isDone = () => {
    setPointsAdded(true);
    if (done) {
      switch (student.house) {
        case "Gryffindor":
          return dispatch(grifinoriaPointsAddThunk(Math.abs(value)));
        case "Hufflepuff":
          return dispatch(lufaLufaPointsAddThunk(Math.abs(value)));
        case "Slytherin":
          return dispatch(sonserinaPointsAddThunk(Math.abs(value)));
        case "Ravenclaw":
          return dispatch(corvinalPointsAddThunk(Math.abs(value)));
        default:
          return null;
      }
    } else {
      switch (student.house) {
        case "Gryffindor":
          return dispatch(grifinoriaPointsRemoveThunk(Math.abs(value)));
        case "Hufflepuff":
          return dispatch(lufaLufaPointsRemoveThunk(Math.abs(value)));
        case "Slytherin":
          return dispatch(sonserinaPointsRemoveThunk(Math.abs(value)));
        case "Ravenclaw":
          return dispatch(corvinalPointsRemoveThunk(Math.abs(value)));
        default:
          return null;
      }
    }
  };

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <StyledPopup
        trigger={
          <Button>
            <Image src={insertPoints} alt="apply-points" />{" "}
          </Button>
        }
        modal
        nested
        onOpen={findHouse}
      >
        {(close) => (
          <>
            <Header>
              <StudentPic src={student.image} alt={student.name} />
            </Header>
            <Content>
              <BoxLogo>
                <HouseLogo src={house} alt={student.house} />
                <HouseName>{student.house}</HouseName>
              </BoxLogo>
              <Name>{student.name}</Name>
              <BoxPoints>
                {pointsAddded ? (
                  <>
                    <Input
                      placeholder="how many points?"
                      type="number"
                      value={value}
                      onChange={handleInput}
                    />
                    <ButtonsPlace>
                      <ButtonAdd onClick={addPoints}>Gain</ButtonAdd>
                      <ButtonRemove onClick={removePoints}>Lose</ButtonRemove>
                    </ButtonsPlace>
                  </>
                ) : (
                  <>
                    {done ? (
                      <DisplayAddPoints>+ {value}</DisplayAddPoints>
                    ) : (
                      <DisplayRemovePoints>- {value}</DisplayRemovePoints>
                    )}
                    <ButtonsPlace>
                      <ButtonDone onClick={isDone}>Done</ButtonDone>
                    </ButtonsPlace>
                  </>
                )}
              </BoxPoints>
            </Content>
          </>
        )}
      </StyledPopup>
    </>
  );
};

export default InsertPoints;

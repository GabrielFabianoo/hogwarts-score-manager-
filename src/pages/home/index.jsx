import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudentListThunk } from "../../store/modules/students-list/thunks";
import StudentsList from "../../components/students-list";
import {
  ContainerHome,
  NavHome,
  BoxNav,
  BoxLogo,
  NavTitle,
  Logo,
  Card,
  ContainerCards,
  Title,
  Image,
  Points,
  ContainerStudent,
  BoxStudentsList,
  ContainerStudentTitle,
  BoxTitle,
  BoxInput,
  Input,
} from "./styled";

import logoHogwarts from "../../components/images/logo-hogwarts.png";
import sonserina from "../../components/images/sonserina.png";
import grifinoria from "../../components/images/grifinoria.png";
import lufaLufa from "../../components/images/lufa-lufa.png";
import corvinal from "../../components/images/corvinal.png";

import { setValueThunk } from "../../store/modules/input/thunk";
import { filteredStudentsThunk } from "../../store/modules/filteredStudents/thunks";

const Home = () => {
  const dispatch = useDispatch();
  const {
    Grifinoria,
    Sonserina,
    LufaLufa,
    Corvinal,
    value,
    students,
  } = useSelector((state) => state);

  const [houses, setHouses] = useState([
    { title: "Gryffindor", img: grifinoria, points: Grifinoria },
    { title: "Slytherin", img: sonserina, points: Sonserina },
    { title: "Hufflepuff", img: lufaLufa, points: LufaLufa },
    { title: "Ravenclaw", img: corvinal, points: Corvinal },
  ]);

  useEffect(() => {
    dispatch(getStudentListThunk());
  }, [dispatch]);

  useEffect(() => {
    setHouses([
      { title: "Gryffindor", img: grifinoria, points: Grifinoria },
      { title: "Slytherin", img: sonserina, points: Sonserina },
      { title: "Hufflepuff", img: lufaLufa, points: LufaLufa },
      { title: "Ravenclaw", img: corvinal, points: Corvinal },
    ]);
  }, [Grifinoria, Sonserina, LufaLufa, Corvinal]);

  const handleInput = (e) => {
    const searchStudents = students.filter((student) =>
      student.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const searchHouse = students.filter((student) =>
      student.house.toLowerCase().includes(e.target.value.toLowerCase())
    );
    const searchHogwarts = searchStudents.concat(searchHouse);

    dispatch(setValueThunk(e.target.value));
    dispatch(filteredStudentsThunk(searchHogwarts));
  };

  return (
    <>
      <NavHome>
        <BoxNav>
          <BoxLogo>
            <Logo src={logoHogwarts} alt="logo-hogwarts" />
            <NavTitle>Hogwarts Score Manager</NavTitle>
          </BoxLogo>
        </BoxNav>
      </NavHome>
      <ContainerHome>
        <ContainerCards>
          {houses
            .sort((a, b) => b.points - a.points)
            .map((house, idx) => (
              <Card key={idx}>
                <Title>
                  #{idx + 1} {house.title}
                </Title>
                <Image src={house.img} alt={house.title} />
                <Points points={house.points}>{house.points}</Points>
              </Card>
            ))}
        </ContainerCards>
        <ContainerStudent>
          <BoxStudentsList>
            <ContainerStudentTitle>
              <BoxTitle>Students</BoxTitle>
              <BoxInput>
                <Input
                  placeholder="Search for 'name' or 'house'"
                  value={value}
                  onChange={handleInput}
                />
              </BoxInput>
            </ContainerStudentTitle>
            <StudentsList />
          </BoxStudentsList>
        </ContainerStudent>
      </ContainerHome>
    </>
  );
};

export default Home;

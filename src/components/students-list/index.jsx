import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Student from "../student";
import {
  Line,
  Name,
  House,
  Pagination,
  Button,
  CurrentPage,
  ContainerStudants,
} from "./styled";

const StudentsList = () => {
  const { students, value, filteredStudents } = useSelector((state) => state);
  const [page, setPage] = useState(0);
  const [studentPages, setStudentPages] = useState([[]]);
  const [studentPagesFiltered, setStudentPagesFiltered] = useState([[]]);

  const createPage = (base, max) => {
    const res = [[]];
    let page = 0;
    base.map((_el, idx) => {
      res[page] === undefined && (res[page] = []);
      res[page] = [...res[page], base[idx]];
      (idx + 1) % max === 0 && (page += 1);
      return res;
    });
    return res;
  };

  useEffect(() => {
    setStudentPages(createPage(students, 5));
  }, [students]);

  useEffect(() => {
    setStudentPagesFiltered(createPage(filteredStudents, 5));
  }, [filteredStudents, value]);

  return (
    <>
      <Line>
        <Name>Name</Name>
        <House>House</House>
      </Line>
      {value === "" ? (
        <ContainerStudants>
          {studentPages[page]?.map((student, idx) => (
            <Student key={idx} student={student} />
          ))}
        </ContainerStudants>
      ) : (
        <ContainerStudants>
          {studentPagesFiltered[page]?.map((student, idx) => (
            <Student key={idx} student={student} />
          ))}
        </ContainerStudants>
      )}
      {value === "" ? (
        <Pagination>
          {page > 0 && (
            <Button onClick={() => setPage(page - 1)}>
              <img
                src="https://img.icons8.com/offices/16/000000/double-left.png"
                alt="back"
              />
            </Button>
          )}
          {studentPages?.map((_student, idx) => (
            <Button key={idx} onClick={() => setPage(idx)}>
              {idx + 1}
            </Button>
          ))}

          {page < studentPages.length - 1 && (
            <Button onClick={() => setPage(page + 1)}>
              <img
                src="https://img.icons8.com/offices/16/000000/double-right.png"
                alt="next"
              />
            </Button>
          )}
        </Pagination>
      ) : (
        <Pagination>
          {page > 0 && (
            <Button onClick={() => setPage(page - 1)}>
              <img
                src="https://img.icons8.com/offices/16/000000/double-left.png"
                alt="back"
              />
            </Button>
          )}
          {studentPagesFiltered?.map((_student, idx) => (
            <Button key={idx} onClick={() => setPage(idx)}>
              {idx + 1}
            </Button>
          ))}

          {page < studentPagesFiltered.length - 1 && (
            <Button onClick={() => setPage(page + 1)}>
              <img
                src="https://img.icons8.com/offices/16/000000/double-right.png"
                alt="next"
              />
            </Button>
          )}
        </Pagination>
      )}
      <CurrentPage>{page + 1}</CurrentPage>
    </>
  );
};

export default StudentsList;

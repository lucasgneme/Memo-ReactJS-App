// Este es el banner de la Task APP con username y cuantas tareas tiene por hacer
import memoLogo from "../Assets/images/memoapplogo.png";
import Checkboxs from "./Checkboxs.module.css";

export default function TaskBanner({ userName, taskList }) {
  
  return (
    <>
      <div className="d-flex">
        <div className="mx-2 border border-dark bg-dark bg-gradient border border-3 rounded-pill px-2 ps-3">
          <img
            src={memoLogo}
            alt="memo app logo"
            className={`img-fluid ${Checkboxs.imgLogo}`}
          />
        </div>
        <div className="mx-3">
          <h2 className="h1 text-dark fw-bold ">Memo App</h2>
          <h3 className="h6">
            {" "}
            {userName} (You still have{" "}
            <strong className="text-dark fs-5">
              {taskList.filter((t) => !t.done).length}
            </strong>{" "}
            tasks to do!)
          </h3>
        </div>
      </div>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-person-circle m-3"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
        </svg>
        <button className="text-white btn btn-dark m-1 fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-box-arrow-in-right me-2"
            viewBox="2 2 14 14"
          >
            <path d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
            <path d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
          </svg>
          Login
        </button>
        <button className="text-white btn btn-dark m-1 fw-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="currentColor"
            className="bi bi-person-plus me-2"
            viewBox="0 1 16 16"
          >
            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            <path d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
          </svg>
          Register
        </button>
      </div>
    </>
  );
}

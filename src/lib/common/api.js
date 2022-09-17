let baseAddress =
  "http://localhost:3003/api/v1" || process.env.RACHUNKI_BACKEND_URL; // https://apiexaminator.cyber-man.pl/api

let verifyingHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getCookie("token")}`,
};

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

const login = (username, password) => {
  return new Promise((resolve) => {
    fetch(baseAddress + "/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return resolve(err);
      });
  });
};

const register = (username, password) => {
  return new Promise((resolve) => {
    fetch(baseAddress + "/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        return resolve(res);
      })
      .catch((err) => {
        return resolve(err);
      });
  });
};

const verify = () => {
  return fetch(baseAddress + "/users/verify", {
    method: "POST",
    headers: verifyingHeaders,
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

const changePassword = (oldPassword, newPassword) => {
  return fetch(baseAddress + "/users/change-password", {
    method: "POST",
    headers: verifyingHeaders,
    body: JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const changeUsername = (username) => {
  return fetch(baseAddress + "/users/change-username", {
    method: "POST",
    headers: verifyingHeaders,
    body: JSON.stringify({
      username: username,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const createExam = (exam) => {
  return fetch(baseAddress + "/exams/post", {
    method: "POST",
    headers: verifyingHeaders,
    body: JSON.stringify({
      exam: exam,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const getUserExams = () => {
  return fetch(`${baseAddress}/exams/get`, {
    method: "POST",
    headers: verifyingHeaders,
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const getExam = (examId) => {
  return fetch(`${baseAddress}/exams/${examId}`, {
    method: "POST",
    headers: verifyingHeaders,
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

const logout = () => {
  document.cookie = "token=;";
  window.location.reload();
};

export {
  login,
  register,
  logout,
  verify,
  getCookie,
  changePassword,
  changeUsername,
  createExam,
  getUserExams,
  getExam,
};

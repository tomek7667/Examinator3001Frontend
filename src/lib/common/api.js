let baseAddress =
  "http://localhost:3003/api/v1" || process.env.RACHUNKI_BACKEND_URL; // https://apiexaminator.cyber-man.pl/api

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

const verify = (token) => {
  return fetch(baseAddress + "/users/verify", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

const changePassword = (oldPassword, newPassword, token) => {
  return fetch(baseAddress + "/users/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      oldPassword: oldPassword,
      newPassword: newPassword,
      token: token,
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

const changeUsername = (username, token) => {
  return fetch(baseAddress + "/users/change-username", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      token: token,
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

const createExam = (exam, token) => {
  return fetch(baseAddress + "/exams/post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      exam: exam,
      token: token,
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

const getUserExams = (token) => {
  return fetch(`${baseAddress}/exams/get`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
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

const getExam = (examId, token) => {
  return fetch(`${baseAddress}/exams/get/${examId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: token,
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

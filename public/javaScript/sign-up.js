const signUpForm = async () => {
    const username = document.querySelector("#username-signup").value.trim;
    const password = document.querySelector("#password-signup").value.trim;

    if (username && password) {
        const res = await fetch ('/api/users', {
            method: "POST",
            body: JSON.stringify({
              username,
              password,
            }),
            headers: { "Content-Type": "application/json" },
          });
      
          if (res.ok) {
            document.location.replace('/dashboard');
          } else {
            alert(res.statusText);
          }
        }
      };

      document
      .querySelector('#sign-up-form')
      .addEventListener('submit', signUpForm);
      

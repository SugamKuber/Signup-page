import './App.css';

function App() {
  return (
    <>
      <div class="main-body">
        <h1 class="h1-1">The best offer <br></br><span class="h1-2">for your business </span></h1>
        <br></br>
        <p class="main-p">Lorem ipsum dolor sit amet consectetur adipisicing<br></br>
          elit. Eveniet, itaque accusantium odio, soluta, corrupti<br></br>
          aliquam quibusdam tempora at cupiditate quis eum<br></br>
          maiores libero veritatis? Dicta facilis sint aliquid ipsum<br></br>
          atque?
        </p>
      </div>
      <div class="content">
        <div class="signup">
          <form>
            <div class="container">
              <input type="text" name="firstname" placeholder="Firstname" size="15" required></input>
              <input type="text" name="lastname" placeholder="Lastname" size="15" required ></input><br></br>
              <input class="inbox" type="text" placeholder="Enter Email" name="email" required></input><br></br>
              <input class="inbox" type="password" placeholder="Enter Password" name="psw" required></input><br></br>
              <label class="form-control">
                <input type="checkbox" class="checkbox"/>
                Subscribe to our newsletter
              </label>
              <button class="but registerbtn" type="submit">SIGN UP</button>
            </div>
          </form>
          <div class="icon">
            <h6>or sign up with</h6>

            <img class="img"alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTSAxNS4wMDM5MDYgMyBDIDguMzc0OTA2MiAzIDMgOC4zNzMgMyAxNSBDIDMgMjEuNjI3IDguMzc0OTA2MiAyNyAxNS4wMDM5MDYgMjcgQyAyNS4wMTM5MDYgMjcgMjcuMjY5MDc4IDE3LjcwNyAyNi4zMzAwNzggMTMgTCAyNSAxMyBMIDIyLjczMjQyMiAxMyBMIDE1IDEzIEwgMTUgMTcgTCAyMi43MzgyODEgMTcgQyAyMS44NDg3MDIgMjAuNDQ4MjUxIDE4LjcyNTk1NSAyMyAxNSAyMyBDIDEwLjU4MiAyMyA3IDE5LjQxOCA3IDE1IEMgNyAxMC41ODIgMTAuNTgyIDcgMTUgNyBDIDE3LjAwOSA3IDE4LjgzOTE0MSA3Ljc0NTc1IDIwLjI0NDE0MSA4Ljk2ODc1IEwgMjMuMDg1OTM4IDYuMTI4OTA2MiBDIDIwLjk1MTkzNyA0LjE4NDkwNjMgMTguMTE2OTA2IDMgMTUuMDAzOTA2IDMgeiI+PC9wYXRoPjwvc3ZnPg=="/>
<a>&emsp;</a>
            <img class="img" alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw2LjAxNiw0LjQzMiwxMC45ODQsMTAuMjA2LDExLjg1MlYxOC4xOGgtMi45Njl2LTMuMTU0aDIuOTY5di0yLjA5OWMwLTMuNDc1LDEuNjkzLTUsNC41ODEtNSBjMS4zODMsMCwyLjExNSwwLjEwMywyLjQ2MSwwLjE0OXYyLjc1M2gtMS45N2MtMS4yMjYsMC0xLjY1NCwxLjE2My0xLjY1NCwyLjQ3M3YxLjcyNGgzLjU5M0wxOS43MywxOC4xOGgtMy4xMDZ2OC42OTcgQzIyLjQ4MSwyNi4wODMsMjcsMjEuMDc1LDI3LDE1QzI3LDguMzczLDIxLjYyNywzLDE1LDN6Ij48L3BhdGg+PC9zdmc+"/>
<a>&emsp;</a>
            <img class="img"alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw1LjYyMywzLjg3MiwxMC4zMjgsOS4wOTIsMTEuNjNDMTIuMDM2LDI2LjQ2OCwxMiwyNi4yOCwxMiwyNi4wNDd2LTIuMDUxIGMtMC40ODcsMC0xLjMwMywwLTEuNTA4LDBjLTAuODIxLDAtMS41NTEtMC4zNTMtMS45MDUtMS4wMDljLTAuMzkzLTAuNzI5LTAuNDYxLTEuODQ0LTEuNDM1LTIuNTI2IGMtMC4yODktMC4yMjctMC4wNjktMC40ODYsMC4yNjQtMC40NTFjMC42MTUsMC4xNzQsMS4xMjUsMC41OTYsMS42MDUsMS4yMjJjMC40NzgsMC42MjcsMC43MDMsMC43NjksMS41OTYsMC43NjkgYzAuNDMzLDAsMS4wODEtMC4wMjUsMS42OTEtMC4xMjFjMC4zMjgtMC44MzMsMC44OTUtMS42LDEuNTg4LTEuOTYyYy0zLjk5Ni0wLjQxMS01LjkwMy0yLjM5OS01LjkwMy01LjA5OCBjMC0xLjE2MiwwLjQ5NS0yLjI4NiwxLjMzNi0zLjIzM0M5LjA1MywxMC42NDcsOC43MDYsOC43Myw5LjQzNSw4YzEuNzk4LDAsMi44ODUsMS4xNjYsMy4xNDYsMS40ODFDMTMuNDc3LDkuMTc0LDE0LjQ2MSw5LDE1LjQ5NSw5IGMxLjAzNiwwLDIuMDI0LDAuMTc0LDIuOTIyLDAuNDgzQzE4LjY3NSw5LjE3LDE5Ljc2Myw4LDIxLjU2NSw4YzAuNzMyLDAuNzMxLDAuMzgxLDIuNjU2LDAuMTAyLDMuNTk0IGMwLjgzNiwwLjk0NSwxLjMyOCwyLjA2NiwxLjMyOCwzLjIyNmMwLDIuNjk3LTEuOTA0LDQuNjg0LTUuODk0LDUuMDk3QzE4LjE5OSwyMC40OSwxOSwyMi4xLDE5LDIzLjMxM3YyLjczNCBjMCwwLjEwNC0wLjAyMywwLjE3OS0wLjAzNSwwLjI2OEMyMy42NDEsMjQuNjc2LDI3LDIwLjIzNiwyNywxNUMyNyw4LjM3MywyMS42MjcsMywxNSwzeiI+PC9wYXRoPjwvc3ZnPg=="/>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;

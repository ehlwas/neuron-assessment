import AfterApp from "./AfterApp"
import InitialSetup from "./auth/InitialSetup"
import LoginChecker from "./auth/LoginChecker"

function App() {

  return (
    <>
      <InitialSetup>



        <LoginChecker>

          <AfterApp />

        </LoginChecker>



      </InitialSetup>
    </>

  )
}

export default App

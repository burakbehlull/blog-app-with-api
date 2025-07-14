import Routers from "./routes/index";
import { MainLayout } from "@pages"
function App() {

  return (
	<>
		<MainLayout>
			<Routers />
		</MainLayout>
	</>
  )
  
  
}

export default App

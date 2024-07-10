import { LocationProvider, Route, Router } from "preact-iso";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/_404";
import { ArchivePage } from "../pages/Archive";

export function App2() {
 

  return (
    <>
      <LocationProvider>
				<Router>
					<Route path="/" component={Home } />
					<Route default component={NotFound} />
					<Route path="/archive" component={ArchivePage} />

				</Router>
		</LocationProvider>
    </>
  )
}
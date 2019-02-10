import HomePage from "views/HomePage.jsx";
import BuildingPage from "views/BuildingPage.jsx";
import PartneringPage from "views/PartneringPage.jsx";
import ClientsPage from "views/ClientsPage.jsx";
import PricingPage from "views/PricingPage.jsx";
import ContactPage from "views/ContactPage.jsx";
import AboutUsPage from "views/AboutUsPage.jsx";
import PortfolioPage from "views/PortfolioPage.jsx";
import DeveloperPage from "views/DeveloperPage.jsx";
import ProjectsPage from "views/ProjectsPage.jsx";
import Client1 from "views/clients/Client1.jsx";
import Client2 from "views/clients/Client2.jsx";
import Client3 from "views/clients/Client3.jsx";
import Client4 from "views/clients/Client4.jsx";

var indexRoutes = [
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/partnering", name: "PartneringPage", component: PartneringPage },
  { path: "/building", name: "BuildingPage", component: BuildingPage },
  { path: "/projects", name: "ProjectsPage", component: ProjectsPage },
  { path: "/developer", name: "DeveloperPage", component: DeveloperPage },
  { path: "/clients", name: "ClientsPage", component: ClientsPage },
  { path: "/contact", name: "ContactPage", component: ContactPage },
  { path: "/about-us", name: "AboutUsPage", component: AboutUsPage },
  { path: "/portfolio", name: "PortfolioPage", component: PortfolioPage },
  { path: "/clients/1", name: "Client1", component: Client1 },
  { path: "/clients/2", name: "Client2", component: Client2 },
  { path: "/clients/3", name: "Client3", component: Client3 },
  { path: "/clients/4", name: "Client4", component: Client4 },
  { path: "/", name: "HomePage", component: HomePage }
];

export default indexRoutes;

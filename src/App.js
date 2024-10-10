import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layouts/Layout";
import Dashboard from "./pages/Dashboard";
import Sellerbillingdetails from "./pages/Sellerbillingdetails";
import SellerList from "./pages/SellerList";
import SellerInfo from "./pages/SellerInfo";
import Fortalfeedback from "./pages/Fortalfeedback";
import Customerreview from "./pages/Customerreview";
import Customerlist from "./pages/Customerlist";
import Productlist from "./pages/Productlist";
import Productmapping from "./pages/Productmapping";
import Cuts from "./pages/Cuts";
import Outfitdetails from "./pages/Outfitdetails";
import Fabric from "./pages/Fabric";
import Positionmanager from "./pages/Positionmanager";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/sellerList"
          element={
            <Layout>
              <SellerList />
            </Layout>
          }
        />
        <Route
          path="/sellerInfo"
          element={
            <Layout>
              <SellerInfo />
            </Layout>
          }
        />
        <Route
          path="/sellerbillingdetails"
          element={
            <Layout>
              <Sellerbillingdetails />
            </Layout>
          }
        />
        <Route
          path="/Customerreview"
          element={
            <Layout>
              <Customerreview />
            </Layout>
          }
        />
        <Route
          path="/Fortalfeedback"
          element={
            <Layout>
              <Fortalfeedback />
            </Layout>
          }
        />
        <Route
          path="/Customerlist"
          element={
            <Layout>
              <Customerlist />
            </Layout>
          }
        />
        <Route
          path="/Productlist"
          element={
            <Layout>
              <Productlist />
            </Layout>
          }
        />
        <Route
          path="/Productmapping"
          element={
            <Layout>
              <Productmapping />
            </Layout>
          }
        />
        <Route
          path="/Cuts"
          element={
            <Layout>
              <Cuts />
            </Layout>
          }
        />
        <Route
          path="/Outfitdetails"
          element={
            <Layout>
              <Outfitdetails />
            </Layout>
          }
        />
        <Route
          path="/Fabric"
          element={
            <Layout>
              <Fabric />
            </Layout>
          }
        />
        <Route
          path="/Positionmanager"
          element={
            <Layout>
              <Positionmanager />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

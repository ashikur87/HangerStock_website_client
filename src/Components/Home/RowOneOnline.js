import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./home.styled";
import Button from "@mui/material/Button";
import Styles from './home.module.css'

const buttonGetStyle = {
  background: "#EFF6E9",
  color: "#333333",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const buttonLearnStyle = {
  background: "#599F22",
  color: "#FFFFFF",
  textTransform: "none",
  padding: "10px 12px",
  fontSize: "14px",
  fontWeight: 600,
  borderRadius: "10px",
};

const RowOneOnline = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function reportWindowSize() {
      setWindowWidth(window.innerWidth);
    }
    // Trigger this function on resize
    window.addEventListener("resize", reportWindowSize);
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener("resize", reportWindowSize);
  }, []);
  const navigate = useNavigate();
  return (
    <>

      <div className={Styles.banner}>
      <h.RowOne style={{ padding: windowWidth < 1200 ? "50px 0px" : "0px"  } }>
        <h.RowCon >
          <h.RowOneLeft>
            <h.RlCon>
            <p
                style={{ color: "#FFFFFF", fontSize: "22px", fontWeight: 400 }}
              >
                ONLINE AUCTIONS FOR LIQUIDATION, RETURNS, AND OVERSTOCK
              </p>
              {/* <p
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 400 }}
              >
                ONLINE  AUCTIONS FOR LIQUIDATION, RETURNS, AND OVERSTOCK
              </p> */}
              {/* <h1
                style={{
                  color: "#FFFFFF",

                  fontSize: windowWidth < 1200 ? "30px" : "40px",
                  fontWeight: 700,
                }}
              >
                Millions of Fashion products for Garment factory and
                manufacturers
              </h1> */}
              <p style={{ 
                color: "#FFFFFF",
                textAlign:'justify',
            
            }}>
              100 billion clothes are made around the world every year, and 33 billion clothes are burned. It is a company that connects the manufacturing plant and purchases and sells customs and stocks related to the US chain store and department store brand clothes.  The purpose of our company is already a business purpose for environmental issues that can be applied to all countries, not racial or state -based businesses. It aims to minimize, reuse, and distribute the amount of abandoned environmental waste in the poor countries of wealthy countries.
              </p>
              <p style={{ color: "#FFFFFF" }}>
                Top Detail B2B marketplaces. Thousands of liquidation auctions.
              </p>

              <div style={{ marginTop: "35px" }}>
                <Button
                  style={buttonGetStyle}
                  onClick={() => navigate("/allauctions")}
                >
                  Shop All Auctions
                </Button>

                <Button
                  style={buttonLearnStyle}
                  sx={{ marginLeft: "15px", border: "1px solid #FFFFFF" }}
                  onClick={() => navigate("/marketplace")}
                >
                  Browse Marketplaces
                </Button>
              </div>
            </h.RlCon>
          </h.RowOneLeft>
          <h.RowOneRight>
            <h.RrCon>
              <h.RrConD1>
                <h.RrConD1I1>
                  <img alt=''
                    src={require("../../Constants/images/image 58.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD1I1>
                <h.RrConD1I2>
                  <img alt=''
                    src={require("../../Constants/images/image 54.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD1I2>
              </h.RrConD1>
              <h.RrConD2>
                <h.RrConD2I1>
                  <img  alt=''
                    src={require("../../Constants/images/image 55.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD2I1>
                <h.RrConD2I2>
                  <img alt=''
                    src={require("../../Constants/images/image 56.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD2I2>
              </h.RrConD2>
              <h.RrConD3>
                <h.RrConD3I1>
                  {" "}
                  <img alt=''
                    src={require("../../Constants/images/image 57.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD3I1>
                <h.RrConD3I2>
                  {" "}
                  <img alt=''
                    src={require("../../Constants/images/image 59.png")}
                    style={{
                      borderRadius: "10px",
                      maxHeight: "100%",
                      maxWidth: "100%",
                    }}
                  />
                </h.RrConD3I2>
              </h.RrConD3>
            </h.RrCon>
          </h.RowOneRight>
        </h.RowCon>
      </h.RowOne>
      </div>
    </>
  );
};

export default RowOneOnline;

import { Grid } from "@mui/material";
import { RiArrowDownLine, RiArrowUpLine, RiCashLine } from "@remixicon/react";
import React from "react";
import { VectorMap } from "@south-paw/react-vector-maps";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Overview = () => {
  const data = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="overview">
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <div className="over_profile">
            <img
              src="https://w0.peakpx.com/wallpaper/592/1017/HD-wallpaper-memoji-emoji-album-artwork-cover-art-emoji-stickers-iphone-boy-emoji.jpg"
              alt=""
              className="over_profile_img"
            />
            <div className="overview_text">
              <h3>Welcome Back, Shanrin 👋 </h3>
              <p>Manage your Sales Easy With Us</p>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    <span>23,300</span>
                  </h3>
                  <p>Total Order</p>
                </div>
                <div className="overview_icon over_icon1">
                  <RiCashLine className="overview_icon_img icon1" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    <span>23,300</span>
                  </h3>
                  <p>New Customers</p>
                </div>
                <div className="overview_icon over_icon2">
                  <RiCashLine className="overview_icon_img icon2" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    $ <span>23,300</span>
                  </h3>
                  <p>Total Revenue</p>
                </div>
                <div className="overview_icon over_icon3">
                  <RiCashLine className="overview_icon_img icon3" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    $ <span>23,300</span>
                  </h3>
                  <p>Sold Cars</p>
                </div>
                <div className="overview_icon over_icon4">
                  <RiCashLine className="overview_icon_img icon4" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    $ <span>23,300</span>
                  </h3>
                  <p>Sold Lost</p>
                </div>
                <div className="overview_icon over_icon5">
                  <RiCashLine className="overview_icon_img icon5" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={3}>
          <div className="overview_card_text">
            <div className="card">
              <div className="overview_text_value">
                <div>
                  <h3>
                    $ <span>23,300</span>
                  </h3>
                  <p>Total Sales</p>
                </div>
                <div className="overview_icon over_icon6">
                  <RiCashLine className="overview_icon_img icon6" />
                </div>
              </div>
              <div className="overview_text_arrow">
                <div className="overview_value_arrow">
                  <p>
                    <RiArrowDownLine className="icon-red" />
                    <RiArrowUpLine className="icon-green" />
                  </p>
                  <p>25%</p>
                </div>
                <p className="over_value">From The Last Month</p>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={6}>
          <div className="card">
            <h3>Customer Activity</h3>
            <div className="customer_chart1" style={{ height: "300px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                  }}
                >
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="27%"
                        stopColor="rgba(198,255,206,1)"
                        stopOpacity={1}
                      />
                      <stop
                        offset="64%"
                        stopColor="rgba(255,255,255,1)"
                        stopOpacity={1}
                      />
                    </linearGradient>
                  </defs>
                  {/* Removed CartesianGrid component */}
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#27cd41"
                    fill="url(#colorUv)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Overview;

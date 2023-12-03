import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useHref } from "react-router-dom";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <Container>
      <NavBar>
        <Nav>
          <Milton>
            <Up>
              <FontAwesomeIcon icon={faCaretUp} />
            </Up>
            <MiltonButton>Milton</MiltonButton>
          </Milton>
          <Middle>
            <Middlebutton>Features</Middlebutton>
            <Middlebutton>Testimonial</Middlebutton>
            <Middlebutton>Pricing</Middlebutton>
            <Middlebutton>FAQs</Middlebutton>
            <Middlebutton>Blog</Middlebutton>
          </Middle>
          <End>
            <LogIn>Log in</LogIn>
            <GetStarted>Get started</GetStarted>
          </End>
        </Nav>
      </NavBar>
      <Home>
        <InsideHome>
          <Para1>
            <p>An Another way to manage time</p>
          </Para1>
          <Para2>
            <p>Your new favorite</p>
          </Para2>
          <Line2>
            <p>calendar</p>
            <Calendar className="calendar">
              <img
                style={{ width: 100, height: 60 }}
                src=".\images\spiral-calendar.svg"
                alt=""
              />
            </Calendar>

            <p className="app"> app</p>
          </Line2>

          <Para3>
            <p>
              Here you should explain how cool your app is. Remember, focus on
              the benefits for your users, not on the features.
            </p>
          </Para3>

          <GetStarted className="getfree">Get started, It's free</GetStarted>
          <p className="credit">Free 14 days trials,no credit card needed</p>

          <Rating>
            <Icons>
              <img
                className="icon1"
                src=".\images\boy.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
              <img
                className="icon2"
                src=".\images\grown.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
              <img
                className="icon3"
                src=".\images\man.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
              <img
                className="icon4"
                src=".\images\empathy.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
              <img
                className="icon5"
                src=".\images\girl.png"
                style={{ width: 40, height: 40 }}
                alt=""
              />
            </Icons>
            <RatingInfo>
              <Star>
                <img
                  style={{ width: 40, height: 30 }}
                  src=".\images\white-medium-star.svg"
                  alt="Star"
                />
                <img
                  style={{ width: 40, height: 30 }}
                  src=".\images\white-medium-star.svg"
                  alt="Star"
                />
                <img
                  style={{ width: 40, height: 30 }}
                  src=".\images\white-medium-star.svg"
                  alt="Star"
                />
                <img
                  style={{ width: 40, height: 30 }}
                  src=".\images\white-medium-star.svg"
                  alt="Star"
                />
                <img
                  style={{ width: 40, height: 30 }}
                  src=".\images\white-medium-star.svg"
                  alt="Star"
                />
                <p className="Rating">5.0</p>
              </Star>
              <Users>
                <p>From 200+ happy users</p>
              </Users>
            </RatingInfo>
          </Rating>
          <BuyThis className="getfree">Buy this template for $49</BuyThis>
          <Madin className="getfree">Madin Framer</Madin>
        </InsideHome>
      </Home>
    </Container>
  );
};

const Container = styled.div`
  top: 0;
  left: 0;
  flex-direction: row;
`;

const NavBar = styled.div`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1;
  overflow-y: visible;
  border-bottom-width: 1px;
  border-color: rgb(223, 222, 222);
  border-left-width: 0px;
  border-right-width: 0px;
  border-style: solid;
  border-top-width: 0px;
  width: 100%;
  opacity: 1;
`;

const Nav = styled.nav`
  max-width: 1128px;
  position: relative;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > a {
    width: 135px;
    height: 34px;

    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Milton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const MiltonButton = styled.div`
  padding-left: 3px;
  padding-right: 20px;
  border: none;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const Up = styled.div`
  text-align: center;
  position: relative;
  margin-top: 4px;
  align-items: center;
  justify-content: center;
  background-color: #f1f2f4;
  width: 20px;
  height: 24px;

  &:hover {
    cursor: pointer;
  }
`;
const Middle = styled.div`
  font-size: 16px;
  font-weight: 700;

  color: #6b6b78;
  display: flex;
  margin-left: 20px;
`;

const Middlebutton = styled.div`
  border: none;
  padding-left: 20px;
  padding-right: 20px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
    color: black;
    font-weight: 700px;
  }
`;
const End = styled.div`
  margin-left: 30px;
`;

const LogIn = styled.a`
  padding: 10px 12px;
  margin-right: 12px;
  color: black;
  background-color: #f1f2f4;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const GetStarted = styled.a`
  font-size: 16px;
  color: white;
  background-color: #2e2e2e;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 24px;
  transition-duration: 167ms;
  line-height: 40px;
  font-weight: 600;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const Home = styled.div`
  position: relative;
  animation: swing ease-out 5s forwards;
  float: left;
  margin-top: 80px;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const InsideHome = styled.div`
  width: 60%;

  position: relative;
  margin: auto;
  height: 80vh;
  padding-top: 100px;
`;
const Para1 = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  justify-content: center;
  width: 300px;
  background-color: #f1f2f4;
  border-radius: 20px;
  margin: auto;
`;

const Para2 = styled.div`
  color: #2e2e2e;
  display: flex;
  align-items: center;
  margin: auto;
  font-size: 80px;
  font-weight: 700;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

const Line2 = styled.div`
  color: #2e2e2e;
  display: flex;
  align-items: center;
  margin: auto;
  margin-top: 0px;
  font-size: 80px;
  font-weight: 700;
  justify-content: center;
  width: 100%;
  margin: auto;
`;

const Calendar = styled.image``;

const Para3 = styled.div`
  width: 60%;
  display: flex;
  text-align: center;
  margin: auto;
  margin-top: 20px;
  color: rgb(107, 107, 120);
  line-height: 32px;
`;

const Rating = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  text-align: center;
  margin-top: 30px;
`;

const Star = styled.div`
  width: 50px;
  display: flex;
`;

const Icons = styled.div`
  display: flex;
  width: 190px;
`;

const Users = styled.div`
  margin-top: 5px;
  color: #2e2e2e;
  font-size: 16px;
  margin-left: 5px;
`;

const RatingInfo = styled.div``;

const BuyThis = styled.div`
  box-shadow: 2px 2px silver;
  position: fixed;
  height: 20px;
  border-radius: 20px;
  bottom: 60px;
  right: 10px;
  font-size: 16px;
  color: #2e2e2e;
  background-color: white;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 24px;
  transition-duration: 167ms;
  line-height: 40px;
  font-weight: 600;
  align-items: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Madin = styled.div`
  box-shadow: 2px 2px silver;
  position: fixed;
  bottom: 10px;
  right: 10px;
  height: 20px;
  font-size: 16px;
  border-radius: 20x;
  color: #2e2e2e;
  background-color: white;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 24px;
  transition-duration: 167ms;
  line-height: 40px;
  align-items: center;

  &:hover {
    overflow: visible;
    cursor: pointer;
  }
`;
export default header;

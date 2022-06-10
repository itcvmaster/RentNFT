import styled from 'styled-components';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';

import { Icon15x15 } from './Icon';
import Modal from './Modals';
import { tablet, mobile, mobileSmall } from 'utils'
import RentingDetail from './Modals/RentingDetail';
import LendSetting from './Modals/LendSetting';
import PayBackSetting from './Modals/PayBackSetting';
import ConfirmWindow from 'components/Modals/ConfirmWindow'

export const MarketCard: React.FC<any> = (props: any) => {
  const { imagePath, title, author, maxDuration, dailyPrice, collateralPrice, priceUnit, lenderAdd, contractAdd, state, describe } = props;
  let [showModal, setShowModal] = useState(false);
  let [confirm, setConfirm] = useState(false);
  const { isAuthenticated } = useMoralis();
  const onOK = () => {
    setConfirm(false);
    setShowModal(false);
  }
  return (
    <Container>
      <CardBody>
        <Img
          src={imagePath}
          onClick={() => setShowModal(true)}
        />
        <Content>
          <Title>{title}</Title>
          <Line>{author}</Line>
          <Line>
            Daily Price
            <div>
              {dailyPrice}
              {priceUnit}
            </div>
          </Line>
          <Line>
            Collateral
            <div>
              {collateralPrice}
              {priceUnit}
            </div>
          </Line>
          <Line>
            {state}
          </Line>
        </Content>
      </CardBody>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={<RentingDetail
          setShowModal={setShowModal}
          imagePath={imagePath}
          title={title}
          author={author}
          maxDuration={maxDuration}
          dailyPrice={dailyPrice}
          collateralPrice={collateralPrice}
          priceUnit={priceUnit}
          lenderAdd={lenderAdd}
          contractAdd={contractAdd}
          state={state}
          describe={describe}
          setConfirm={setConfirm}
        />}
      />
      <Modal
        showModal={confirm}
        setShowModal={setConfirm}
        content={
          <ConfirmWindow
            text={isAuthenticated ? "Rented Sucessfully!" : "Please connect to your Wallet."}
            setConfirm={setConfirm}
            onClose={onOK}
          />}
      />
    </Container >
  );
}
export const CollectionCard: React.FC<any> = (props: any) => {
  const { imagePath, author, onClick } = props;
  return (
    <Container>
      <CardBody>
        <Img
          src={imagePath}
          onClick={onClick}
        />
        <Content>
          <Title>{author}</Title>
          <Opensea
            href={"https://opensea.io/collection/" + author.toLowerCase()}
            target="_blank"
          >
            <Icon15x15 src="icons/opensea.svg" />
            <Line>View on OpenSea</Line>
          </Opensea>
        </Content>
      </CardBody>
    </Container >
  );
}
export const LendCard: React.FC<any> = (props: any) => {
  const { dataIndex, imagePath, title, author, describe } = props;
  let [showModal, setShowModal] = useState(false);
  let [confirm, setConfirm] = useState(false);
  const onOK = () => {
    setConfirm(false);
    setShowModal(false);
  }
  return (
    <Container>
      <CardBody>
        <Img
          src={imagePath}
          onClick={() => setShowModal(true)}
        />
        <Content>
          <Title>{title}</Title>
        </Content>
      </CardBody>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={
          <LendSetting
            dataIndex={dataIndex}
            setShowModal={setShowModal}
            imagePath={imagePath}
            title={title}
            author={author}
            describe={describe}
            setConfirm={setConfirm}
          />}
      />
      <Modal
        showModal={confirm}
        setShowModal={setConfirm}
        content={<ConfirmWindow
          text="Lended Sucessfully!"
          setConfirm={setConfirm}
          onClose={onOK}
        />}
      />
    </Container >
  );
}
export const PayBackCard: React.FC<any> = (props: any) => {
  const { dataIndex, imagePath, title, author, maxDuration, dailyPrice, collateralPrice, priceUnit, lenderAdd, contractAdd, state, describe } = props;
  let [showModal, setShowModal] = useState(false);
  let [confirm, setConfirm] = useState(false);
  const onOK = () => {
    setConfirm(false);
    setShowModal(false);
  }
  return (
    <Container>
      <CardBody>
        <Img
          src={imagePath}
          onClick={() => setShowModal(true)}
        />
        <Content>
          <Title>{title}</Title>
        </Content>
      </CardBody>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        content={
          <PayBackSetting
            setShowModal={setShowModal}
            dataIndex={dataIndex}
            imagePath={imagePath}
            title={title}
            author={author}
            maxDuration={maxDuration}
            rentDate={"6/6/2022"}
            duration={3}
            dailyPrice={dailyPrice}
            collateralPrice={collateralPrice}
            priceUnit={priceUnit}
            lenderAdd={lenderAdd}
            contractAdd={contractAdd}
            state={state}
            describe={describe}
            setConfirm={setConfirm}
          />}
      />
      <Modal
        showModal={confirm}
        setShowModal={setConfirm}
        content={
          <ConfirmWindow
            text="Returned Sucessfully!"
            setConfirm={setConfirm}
            onClose={onOK}
          />}
      />
    </Container >
  );
}
const Container = styled.div`
  box-sizing: border-box;
  padding: 20px 10px;
  width: 25%;
  ${tablet} {
    width: 33.3333%;
  }
  ${mobile} {
    width: 50%;
  }
  ${mobileSmall} {
    width: 100%;
  }
`
const CardBody = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 36px #e4e4e4;
  border-radius: var(--border-radius);  
`
const Img = styled.img`
  width: 100%;
  max-width: none;
  aspect-ratio: 1;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  cursor: pointer;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 20px 20px 20px;
  box-sizing: border-box;
`
const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: var(--shade-0);
  display: flex;
  align-items: center;
  justify-content: center;
`
const Line = styled.div`
  font-weight: 400;
  font-size: 14px;
  color: var(--shade-3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`
const Opensea = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
  user-select: none;
`




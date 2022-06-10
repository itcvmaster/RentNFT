import styled from 'styled-components';
import { useState } from 'react';
import { useMoralis } from 'react-moralis';
import { useDispatch } from 'react-redux';

import { Icon15x15 } from './Icon';
import Modal from './Modals';
import { tablet, mobile, mobileSmall } from 'utils'
import NFTDetail from './Modals/NFTDetail';
import ConfirmWindow from 'components/Modals/ConfirmWindow'
import { Actions } from 'store/types';

export const DefaultCard: React.FC<any> = (props: any) => {
  const { action, data, dataIndex, onClick } = props;

  let [showModal, setShowModal] = useState(false);
  let [confirm, setConfirm] = useState(false);
  const { isAuthenticated } = useMoralis();
  const dispatch = useDispatch();
  const text = action === Actions.BUY_NFT ?
    (isAuthenticated ? "Rented Sucessfully!" : "Please connect to your Wallet.") :
    (action === Actions.LEND_NFT ? "Lended Sucessfully!" : "Returned Sucessfully!")

  const clickOk = () => {
    switch (action) {
      case Actions.BUY_NFT: {
        if (isAuthenticated)
          dispatch({ type: Actions.BUY_NFT, title: data.title });
        break;
      }
      case Actions.LEND_NFT: {
        dispatch({ type: Actions.LEND_NFT, dataIndex: dataIndex });
        break;
      }
      case Actions.PAYBACK_NFT: {
        dispatch({ type: Actions.PAYBACK_NFT, dataIndex: dataIndex });
        break;
      }
    }
    setConfirm(false);
  }

  return (
    <Container>
      <CardBody>
        <Img
          src={data.imagePath}
          onClick={() => {
            if (action !== "collections") setShowModal(true);
            else onClick();
          }}
        />
        <Content>
          <Title>{action === "collections" ? data.author : data.title}</Title>
          {action === Actions.BUY_NFT && <Detail>
            <Line>{data.author}</Line>
            <Line>
              Daily Price
              <div>
                {data.dailyPrice}
                {data.priceUnit}
              </div>
            </Line>
            <Line>
              Collateral
              <div>
                {data.collateralPrice}
                {data.priceUnit}
              </div>
            </Line>
            <Line>
              {data.state}
            </Line>
          </Detail>}
          {action === "collections" && <Opensea
            href={"https://opensea.io/collection/" + data.author.toLowerCase()}
            target="_blank"
          >
            <Icon15x15 src="icons/opensea.svg" />
            <Line>View on OpenSea</Line>
          </Opensea>}
        </Content>
      </CardBody>
      <Modal
        showModal={showModal}
        content={
          <NFTDetail
            setShowModal={setShowModal}
            data={data}
            setConfirm={setConfirm}
            action={action}
          />
        }
      />
      <Modal
        showModal={confirm}
        content={
          <ConfirmWindow
            text={text}
            onClick={clickOk}
          />
        }
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
  gap: 10px;
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
const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`



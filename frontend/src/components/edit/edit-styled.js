import styled, {css} from 'styled-components';
import {Column, Row} from "../common-style";
import {InputLabel} from "../input/input-styled";

export const ContentWrapper = styled(Column)`
  width: 100%;
  align-items: center;
`;

export const Content = styled(Column)`
  width: 70%;
  padding: 23px 0;
`;

export const Form = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

export const TitleWrapper = styled(Row)`
  width: 100%;
  padding: 8px 16px;
  justify-content: space-between;
  font-family: HelveticaNeue-Bold;
  font-size: 20px;
  color: #000000;
  letter-spacing: 0;
`;

export const EditColumn = styled(Column)`
  padding: 0 16px;
  flex: 1 1 50%;
`;

export const InputWrapper = styled(Row)`
  ${props => props.basis && css`
    width: ${props.basis}%;
    padding: 0 8px;
  `};
  align-items: flex-end;
`;

export const Divider = styled(InputLabel)`
  height: 38px;
  display: flex;
  align-items: center;
  margin: 12px 0;
`;

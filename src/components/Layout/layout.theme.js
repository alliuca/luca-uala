import styled from 'react-emotion';

export const Container = styled('div')`
  position: relative;
  display: flex;
  min-height: 188px;
  max-width: var(--containerMaxWidth);
  padding: 42px 98px;
  margin: -188px auto 0;
  border-radius: 12px 12px 0 0;
  background-color: #fff;

  @media (min-width: 900px) {
    margin-bottom: 188px
  }

  .background {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: #fff;

    @media (min-width: 900px) {
      left: 50%;
      width: var(--containerMaxWidth);
      transform: translateX(-50%);
    }
  }
`;

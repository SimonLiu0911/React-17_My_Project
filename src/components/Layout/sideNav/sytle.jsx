import styled from "@emotion/styled";

export const SideNavStyle = styled.div`
background-color: #0059BE;
height: 100vh;
`

export const SideNavTitleStyle = styled.div`
height: 64px;
background-color: #004490;
text-align: center;
line-height: 64px;
font-size: 24px;
color: #fff;
`

export const SideNavWrapStyle = styled.div`
> ul {
  padding: 0;
  > li {
    > a {
      display: block;
      padding: 20px;
      color: #fff;
      text-decoration: none;
      &:hover, &.active {
        background-color: #0077FF;
      }
    }
  }
}
`
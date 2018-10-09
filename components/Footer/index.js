import React from "react";
import styled, { css } from "styled-components";
import NextLink from "next/link";
import { Flex, Link } from "rebass";
import Text from "../Text";
import Layout from "../Layout";

const footerLinkStyles = css`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const NextLinkText = styled.a`
  ${footerLinkStyles};
`;

const FooterLink = styled(Link).attrs({
  target: "_blank"
})`
  ${footerLinkStyles};
`;

export default props => (
  <Flex p={4} as="footer">
    <Layout>
      <Flex>
        <Flex flexDirection="column" mr={5}>
          <Text fontWeight="bold" letterSpacing="0.05em" fontSize={1} mb={2}>
            PAGES
          </Text>
          <Text mb={1}>
            <NextLink href="/">
              <NextLinkText>Home</NextLinkText>
            </NextLink>
          </Text>
          <Text mb={1}>
            <NextLink href="/about">
              <NextLinkText>About</NextLinkText>
            </NextLink>
          </Text>
          <Text mb={1}>
            <NextLink href="/audits">
              <NextLinkText>Audits</NextLinkText>
            </NextLink>
          </Text>
        </Flex>
        <Flex flexDirection="column">
          <Text fontWeight="bold" letterSpacing="0.05em" fontSize={1} mb={2}>
            SOCIAL
          </Text>
          <Text mb={1}>
            <FooterLink href="https://twitter.com/mxstbr">Twitter</FooterLink>
          </Text>
          <Text mb={1}>
            <FooterLink href="https://github.com/mxstbr">GitHub</FooterLink>
          </Text>
          <Text>
            <FooterLink href="https://unsplash.com/@mxstbr">
              Unsplash
            </FooterLink>
          </Text>
        </Flex>
      </Flex>
    </Layout>
  </Flex>
);
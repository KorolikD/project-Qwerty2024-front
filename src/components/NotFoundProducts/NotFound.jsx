import { Wrapper, Accent, AccentMessage } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Wrapper>
    <p>
      <Accent>Sorry, no results were found </Accent>
      for the product filters you selected. You may want to consider other
      search options to find the product you want. Our range is wide and you
      have the opportunity to find more options that suit your needs.
    </p>
    <AccentMessage>Try changing the search parameters.</AccentMessage>
    </Wrapper>
  );
};

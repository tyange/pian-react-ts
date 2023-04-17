import { Stack, Pagination, Container } from "@mui/material";

type PaginatorProps = {
  counts: number;
  pageNumHandler: (index: number) => void;
};

const Paginator = ({ counts, pageNumHandler }: PaginatorProps) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Stack spacing={2}>
        <Pagination
          count={Math.ceil(counts / 9)}
          onChange={(e, value) => {
            e.preventDefault();
            pageNumHandler(value);
          }}
        />
      </Stack>
    </Container>
  );
};

export default Paginator;

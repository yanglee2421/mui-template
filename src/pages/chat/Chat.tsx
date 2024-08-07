import {
  AddOutlined,
  AddReactionOutlined,
  SendOutlined,
} from "@mui/icons-material";
import {
  Box,
  InputBase,
  IconButton,
  styled,
  Avatar,
  Divider,
  Typography,
} from "@mui/material";
import { PageLayout } from "@/components/layout/PageLayout";
import { ScrollView } from "@/components/ui/ScrollView";

export function Chat() {
  return (
    <PageLayout>
      <Box>
        <div></div>
        <div>
          <div>
            <Avatar></Avatar>
          </div>
          <Divider></Divider>
          <Box sx={{ paddingBlock: 2 }}>
            <ScrollView sx={{ maxHeight: 480 }}>
              <Box
                sx={{
                  height: 2000,
                  "& > * + *": {
                    marginTop: 3,
                  },
                }}
              >
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Avatar></Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexDirection: "row",
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{
                          fontWeight: 500,
                          fontSize: 18,
                          textTransform: "capitalize",
                        }}
                      >
                        username{" "}
                      </Typography>
                      <Typography variant="overline">
                        {new Date().toLocaleTimeString()}
                      </Typography>
                    </Box>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis ea voluptate, odio amet necessitatibus
                      consequatur cum dicta, officia sequi inventore illum
                      maxime aspernatur minima accusantium autem dolores
                      voluptatibus molestiae corporis.
                    </div>
                  </Box>
                  <Avatar sx={{ visibility: "hidden" }}></Avatar>
                </Box>
                <Box sx={{ display: "flex", gap: 3 }}>
                  <Avatar sx={{ visibility: "hidden" }}></Avatar>
                  <Box sx={{ flex: 1, textAlign: "end" }}>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        flexDirection: "row-reverse",
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{
                          fontWeight: 500,
                          fontSize: 18,
                          textTransform: "capitalize",
                        }}
                      >
                        username{" "}
                      </Typography>
                      <Typography variant="overline">
                        {new Date().toLocaleTimeString()}
                      </Typography>
                    </Box>
                    <div>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis ea voluptate, odio amet necessitatibus
                      consequatur cum dicta, officia sequi inventore illum
                      maxime aspernatur minima accusantium autem dolores
                      voluptatibus molestiae corporis.
                    </div>
                  </Box>
                  <Avatar></Avatar>
                </Box>
              </Box>
            </ScrollView>
          </Box>
          <StyledForm>
            <InputBase multiline placeholder="chat message here..." />
            <Box
              sx={{
                display: "flex",
                gap(theme) {
                  return theme.spacing(1);
                },
              }}
            >
              <IconButton
                sx={{
                  bgcolor(theme) {
                    return theme.palette.action.selected;
                  },
                }}
              >
                <AddOutlined />
              </IconButton>
              <IconButton>
                <AddReactionOutlined />
              </IconButton>

              <IconButton
                sx={{
                  marginInlineStart: "auto",
                  color(theme) {
                    return theme.palette.primary.main;
                  },
                }}
              >
                <SendOutlined color="inherit" />
              </IconButton>
            </Box>
          </StyledForm>
        </div>
      </Box>
    </PageLayout>
  );
}

const StyledForm = styled("form")(({ theme }) => {
  return {
    borderWidth: 1,
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.palette.divider,
    borderStyle: "solid",
    paddingInline: theme.spacing(3),
    paddingBlock: theme.spacing(2),
  };
});

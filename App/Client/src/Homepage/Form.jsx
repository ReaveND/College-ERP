import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const QueryForm = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        background: "linear-gradient(to right, #6478c0ff, #112777ff)",
      }}
    >
      <Card
        sx={{
          width: 600,
          bgcolor: "white",
          color: "#162456",
          borderRadius: 3,
          boxShadow: 8,
          p: 2,
        }}
      >
        <CardContent>
          <Typography variant="h5" gutterBottom sx={{ textAlign: "center" }}>
            Student Query Form
          </Typography>
          <hr style={{ borderColor: "rgba(255,255,255,0.3)" }} />

          <form>
            {/* Student ID */}
            <Box sx={{ width: "100%", mb: 2 }}>
              <TextField
                type="text"
                name="studentId"
                fullWidth
                label="Student ID *"
                variant="outlined"
                InputLabelProps={{ style: { color: "#333" } }}
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ca8a04",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ca8a04",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc !important",
                  },
                }}
              />
            </Box>

            {/* Department */}
            <Box sx={{ width: "100%", mb: 2 }}>
              <TextField
                type="text"
                name="department"
                fullWidth
                label="Department *"
                variant="outlined"
                InputLabelProps={{ style: { color: "#333" } }}
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ca8a04",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ca8a04",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc !important",
                  },
                }}
              />
            </Box>

            {/* Message/Query */}
            <Box sx={{ width: "100%", mb: 3 }}>
              <TextField
                name="message"
                label="Your Message / Query *"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ style: { color: "#333" } }}
                sx={{
                  bgcolor: "white",
                  borderRadius: 1,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ca8a04",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#ca8a04",
                      borderWidth: "2px",
                    },
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ccc !important",
                  },
                }}
              />
            </Box>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              disableElevation
              fullWidth
              sx={{
                bgcolor: "#081a40ff",
                fontWeight: "bold",
                "&:hover": {
                  bgcolor: "#ca8a04",
                },
              }}
            >
              Submit Query
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default QueryForm;

import { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const faqs = [
  {
    question: "How do I install an eSIM?",
    answer:
      "After purchasing your plan, you'll receive a QR code by email. Simply scan the QR code using your phone's eSIM settings and follow the on-screen instructions. Installation usually takes less than 2 minutes, and no physical SIM swap is required.",
  },
  {
    question: "Does Zoiko Orbit work on my phone?",
    answer:
      "Zoiko Orbit works on most modern smartphones that support eSIM technology, including iPhone XS and newer, Google Pixel, Samsung Galaxy, and many other devices. You can always check our compatibility list before purchasing.",
  },
  {
    question: "Can I top up my plan?",
    answer:
      "Yes! You can easily top up your data anytime from your Zoiko Orbit account. Your existing eSIM stays active — simply add more data when you need it without reinstalling anything.",
  },
  {
    question: "What if I face connectivity issues?",
    answer:
      "Our 24/7 global support team is always here to help. If you experience any issues, contact us via chat or email and we'll guide you through quick troubleshooting or resolve it instantly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Box component="section" sx={{ bgcolor: "white", py: 12 }}>
      <Box sx={{ maxWidth: "900px", mx: "auto", px: 3 }}>
        {/* Header */}
        <Typography
          component="h2"
          sx={{
            textAlign: "center",
            fontSize: { xs: "28px", md: "36px" },
            fontWeight: 600,
            color: "grey.900",
            mb: 6,
          }}
        >
          Got Questions? We've Got Answers
        </Typography>

        {/* FAQ List */}
        <Divider />
        {faqs.map((faq, index) => (
          <Box key={index}>
            <Box sx={{ py: 3 }}>
              {/* Question */}
              <Box
                component="button"
                onClick={() => toggle(index)}
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  p: 0,
                  textAlign: "left",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "17px" },
                    fontWeight: 500,
                    color: "grey.800",
                  }}
                >
                  {faq.question}
                </Typography>
                <ChevronRightIcon
                  sx={{
                    color: "grey.500",
                    fontSize: "20px",
                    transition: "transform 0.2s",
                    transform:
                      openIndex === index ? "rotate(90deg)" : "rotate(0deg)",
                    flexShrink: 0,
                    ml: 2,
                  }}
                />
              </Box>

              {/* Answer */}
              {openIndex === index && (
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "15px",
                    color: "grey.600",
                    lineHeight: 1.8,
                    maxWidth: "780px",
                  }}
                >
                  {faq.answer}
                </Typography>
              )}
            </Box>
            <Divider />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

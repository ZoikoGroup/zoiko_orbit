import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "Can we centrally manage data for all our travelers?",
    answer:
      "Yes. Zoiko Orbit provides a centralized admin dashboard where you can provision eSIMs, monitor usage in real-time, manage pooled data plans, and generate detailed reports across teams and regions.",
  },
  {
    question: "Do you integrate with our travel booking tool?",
    answer:
      "Absolutely. Our REST APIs and webhooks integrate seamlessly with major travel booking platforms, ERP systems, and expense tools, enabling automatic provisioning and reporting workflows.",
  },
  {
    question: "How secure is traveler data?",
    answer:
      "We provide enterprise-grade security with GDPR compliance, Tier-1 carrier infrastructure, SOC 2 alignment, and PCI DSS standards. All data is encrypted and securely transmitted.",
  },
  {
    question: "How quickly can we roll out globally?",
    answer:
      "Global deployment can be completed within days. With remote provisioning and centralized controls, you can activate teams across 220+ countries without physical SIM distribution.",
  },
];

export default function EnterpriseFAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box component="section" sx={{ bgcolor: "common.white", py: 12 }}>
      <Container maxWidth={false} sx={{ maxWidth: "1200px", px: { xs: 3, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 7 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.875rem", md: "2.25rem" },
              fontWeight: 600,
              color: "grey.900",
            }}
          >
            Got Questions? We've Got Answers
          </Typography>
        </Box>

        {/* FAQ List */}
        <Box>
          {faqs.map((faq, index) => {
            const panel = `panel${index}`;
            return (
              <Accordion
                key={index}
                expanded={expanded === panel}
                onChange={handleChange(panel)}
                disableGutters
                elevation={0}
                square
                sx={{
                  borderBottom: "1px solid",
                  borderColor: "grey.200",
                  "&:before": { display: "none" },
                  "&.Mui-expanded": { margin: 0 },
                }}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      sx={{
                        color: "grey.500",
                        transition: "transform 0.3s",
                        transform: expanded === panel ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  }
                  sx={{
                    px: 0,
                    py: 3,
                    "& .MuiAccordionSummary-expandIconWrapper": { transform: "none !important" },
                  }}
                >
                  <Typography sx={{ fontSize: "1rem", fontWeight: 500, color: "grey.800" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ px: 0, pb: 3 }}>
                  <Typography sx={{ fontSize: "0.9375rem", color: "grey.600", lineHeight: 1.7 }}>
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}
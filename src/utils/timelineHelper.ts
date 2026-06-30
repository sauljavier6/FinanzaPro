export const timelineConfig: Record<string, any> = {
  EMAIL_SENT: {
    icon: "mail",
    circle: "bg-primary text-white shadow-md",
  },

  WHATSAPP_SENT: {
    icon: "chat",
    circle: "bg-green-600 text-white shadow-md",
  },

  PAYMENT: {
    icon: "payments",
    circle: "bg-emerald-600 text-white shadow-md",
  },

  PAYMENT_APPLIED: {
    icon: "account_balance_wallet",
    circle: "bg-emerald-600 text-white shadow-md",
  },

  PROMISE: {
    icon: "handshake",
    circle: "bg-yellow-500 text-white shadow-md",
  },

  NOTE: {
    icon: "sticky_note_2",
    circle: "bg-indigo-600 text-white shadow-md",
  },

  CAMPAIGN: {
    icon: "campaign",
    circle: "bg-primary text-white shadow-md",
  },

  INVOICE_CREATED: {
    icon: "receipt_long",
    circle:
      "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-500",
  },
};

export const getTimelineConfig = (type?: string) => {
  return timelineConfig[type ?? ""] ?? timelineConfig.INVOICE_CREATED;
};
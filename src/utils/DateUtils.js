const dateFormatter = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
});

export const formatDate = (date) => dateFormatter.format(date);

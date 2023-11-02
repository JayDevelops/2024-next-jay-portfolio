export const accordion = {
    initial: {
        height: 0,
        opacity: 0,
    },
    enter: {
        height: "auto",
        opacity: 1,
        transition: {duration: 0.6, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}
    }
}

export const listAccordion = {
    initial: {
        scaleY: 0,
        opacity: 0,
        transformOrigin: "top center",
    },
    enter: (i: number) => ({
        scaleY: 1,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i
        }
    }),
    exit: (i: number) => ({
        scaleY: 0,
        opacity: 0,
        transition: {
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
            delay: 0.05 * i
        }
    })
}
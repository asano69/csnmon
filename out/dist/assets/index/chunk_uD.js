const uD = {
    sessions: "session",
    event: "error",
    client_report: "internal",
    user_report: "default",
    profile_chunk: "profile",
    replay_event: "replay",
    replay_recording: "replay",
    check_in: "monitor",
    raw_security: "security",
    log: "log_item",
    trace_metric: "metric"
};
export function kae(e) {
    return e in uD;
}
export function Gw(e) {
    if (kae(e)) {
        return uD[e];
    }
    return e;
}

const Uw = "sentry.profile_id";
const Fw = "sentry.exclusive_time";
export function HD(e) {
    let { trace_id, parent_span_id, span_id, status, origin, data, op } = e.contexts?.trace ?? {};
    return {
        data: data ?? {},
        description: e.transaction,
        op,
        parent_span_id,
        span_id: span_id ?? "",
        start_timestamp: e.start_timestamp ?? 0,
        status,
        timestamp: e.timestamp,
        trace_id: trace_id ?? "",
        origin,
        profile_id: data?.[Uw],
        exclusive_time: data?.[Fw],
        measurements: e.measurements,
        is_segment: true
    };
}
export function jD(e) {
    return {
        type: "transaction",
        timestamp: e.timestamp,
        start_timestamp: e.start_timestamp,
        transaction: e.description,
        contexts: {
            trace: {
                trace_id: e.trace_id,
                span_id: e.span_id,
                parent_span_id: e.parent_span_id,
                op: e.op,
                status: e.status,
                origin: e.origin,
                data: {
                    ...e.data,
                    ...e.profile_id && {
                        [Uw]: e.profile_id
                    },
                    ...e.exclusive_time && {
                        [Fw]: e.exclusive_time
                    }
                }
            }
        },
        measurements: e.measurements
    };
}

// I  copy this code from https://github.com/supabase-community/supabase-graphql-example/blob/main/app/lib/use-paginated-query.ts
import React, { useEffect } from "react";
import { useQuery, UseQueryArgs, UseQueryResponse } from "urql";

export function usePaginatedQuery<Data = any, Variables = object>(
    args: UseQueryArgs<Variables, Data> & {
        mergeResult: (oldData: Data, newData: Data) => Data;
    }
): UseQueryResponse<Data, Variables> {
    const [query, queryFn] = useQuery(args);

    const { data, ...rest } = query;

    const mergeRef = React.useRef({ current: data, last: data });

    if (
        data &&
        mergeRef.current.current &&
        query.data !== mergeRef.current.last
    ) {
        mergeRef.current.current = args.mergeResult(mergeRef.current.current, data);
    }

    if (data != null && mergeRef.current.current == null) {
        mergeRef.current.current = data;
    }

    mergeRef.current.last = query.data;

    return [
        {
            ...rest,
            data: mergeRef.current.current,
        },
        queryFn,
    ];
}
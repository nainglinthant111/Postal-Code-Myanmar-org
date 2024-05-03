"use client";

import {ColumnDef} from "@tanstack/react-table";

export interface PostalMyan {
    id: string;
    mm_region : string;
    mm_town_township : string;
    mm_qv_tract : string;
    postal_code: string;
}

export const myanColumns: ColumnDef<PostalMyan>[] = [
    {
        accessorKey: "mm_qv_tract",
        header : "ရပ်ကွက်",
    },
    {
        accessorKey: "mm_town_township",
        header: "မြို့နယ်",
    },
    {
        accessorKey: "postal_code",
        header: "စာတိုက်သင်္ကေတ"
    },

];

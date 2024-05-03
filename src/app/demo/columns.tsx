"use client";

import {ColumnDef} from "@tanstack/react-table";

export interface Postal {
    id: string;
    en_region : string;
    en_town_township : string;
    en_qv_tract : string;
    postal_code: string;
}

export const columns: ColumnDef<Postal>[] = [
    {
        accessorKey: "en_qv_tract",
        header : "Quarters",
    },
    {
        accessorKey: "en_town_township",
        header: "Township",
    },
    {
        accessorKey: "postal_code",
        header: "PostalCode"
    },

];

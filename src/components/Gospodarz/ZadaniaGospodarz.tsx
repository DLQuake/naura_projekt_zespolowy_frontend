import React, { MouseEventHandler, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import AsideGospodarz from "../AsideGospodarz";

import task from "../../task.json";

type Data = typeof task;

type SortKeys = keyof Data[0];

type SortOrder = "ascn" | "desc";

function sortData({
    tableData,
    sortKey,
    reverse,
}: {
    tableData: Data;
    sortKey: SortKeys;
    reverse: boolean;
}) {
    if (!sortKey) return tableData;

    const sortedData = task.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedData.reverse();
    }

    return sortedData;
}

function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
}: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className={`${sortKey === columnKey && sortOrder === "desc"
                ? "sort-button sort-reverse"
                : "sort-button"
                }`}
        >
            ▲
        </button>
    );
}


function ZadaniaGospodarz({ data }: { data: Data }) {
    const [sortKey, setSortKey] = useState<SortKeys>("id");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

    const headers: { key: SortKeys; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "tresc", label: "Treść" },
        { key: "raport", label: "Raport" },
        { key: "czy_wykonane", label: "Czy wykonane?" },
    ];

    const sortedData = useCallback(
        () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
        [data, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

        setSortKey(key);
    }
    return (
        <div className="App">
            <AsideGospodarz></AsideGospodarz>
            <main id="czescglownaGospodarz">
                <div className="zadania_gospodarz">
                    <div className="zadania_naglowek">
                        <h1>Zadania</h1>
                        <Link to="/dodajzadanie">Dodaj zadanie</Link>
                    </div>

                    <div className="zadania_tabela">
                        <table>
                            <thead>
                                <tr>
                                    {headers.map((row) => {
                                        return (
                                            <td key={row.key}>
                                                {row.label}{" "}
                                                <SortButton
                                                    columnKey={row.key}
                                                    onClick={() => changeSort(row.key)}
                                                    {...{
                                                        sortOrder,
                                                        sortKey,
                                                    }}
                                                />
                                            </td>
                                        );
                                    })}
                                </tr>
                            </thead>

                            <tbody>
                                {sortedData().map((person) => {
                                    return (
                                        <tr key={person.id}>
                                            <td>{person.id}</td>
                                            <td>{person.tresc}</td>
                                            <td>{person.raport}</td>
                                            <td>{person.czy_wykonane}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default ZadaniaGospodarz;
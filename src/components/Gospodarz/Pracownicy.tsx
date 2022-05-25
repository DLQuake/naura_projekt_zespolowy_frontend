import React, { MouseEventHandler, useCallback, useState } from "react";
import { Link } from "react-router-dom";

import AsideGospodarz from "../AsideGospodarz";

import data from "../../data.json";

type Data = typeof data;

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

    const sortedData = data.sort((a, b) => {
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


function Pracownicy({ data }: { data: Data }) {
    const [sortKey, setSortKey] = useState<SortKeys>("id");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

    const headers: { key: SortKeys; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "imie", label: "Imie" },
        { key: "nazwisko", label: "Nazwisko" },
        { key: "email", label: "Email" },
        { key: "login", label: "Login" },
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
                <div className="pracownicy">

                    <div className="pracownicy_naglowek">
                        <h1>Pracownicy</h1>
                        <Link to="/dodajpracownika">Dodaj pracownika</Link>
                    </div>

                    <div className="pracownicy_tabela">
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
                                            <td>{person.imie}</td>
                                            <td>{person.nazwisko}</td>
                                            <td>{person.email}</td>
                                            <td>{person.login}</td>
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

export default Pracownicy;
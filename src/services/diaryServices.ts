import { DiaryEntry, newDiaryEntry, NonSensitiveInfoDiaryEntry } from "../types";
import diaryData from "./diaries.json";

const diaries: DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

export const findByID = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find((d) => d.id === id);
    if (entry) {
        const { comment, ...restOfDiary } = entry;
        return restOfDiary;
    }

    return undefined;
};

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility,
        };
    });
};

export const addDiary = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: diaries.length + 1,
        ...newDiaryEntry
    };

    diaries.push(newDiary);
    return newDiary;
};

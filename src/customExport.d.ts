type Tag = {
    id: string;
    name: string;
}
type RecordItem = {
    tags: Tag[]
    notes: string
    type: string
    amount: number
    createdAt?: string// 类 / 构造函数
}
type RootState = {
    recordList: RecordItem[],
    createRecordError: Error | null,
    tagList: Tag[],
    currentTag?: Tag
}
export { RecordItem, Tag, RootState }
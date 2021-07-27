type Tag = {
    id: string;
    name: string;
}
type RecordItem = {
    tags: string[]
    notes: string
    type: string
    amount: number
    createdAt?: string// 类 / 构造函数
}
type RootState = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag?: Tag
}
export { RecordItem, Tag, RootState }
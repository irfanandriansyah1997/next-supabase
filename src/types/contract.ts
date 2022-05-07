/**
 * Tasks Table Row Type
 *
 * @author Irfan Andriansyah <irfan.andriansyah@tokopedia.com>
 * @since 0.0.0
 */
export interface TasksTableRowType {
  date: number;
  desc: string;
  end: string;
  id: number;
  start: string;
  status: number;
  tags?: string;
  type: number;
  userId: string;
}

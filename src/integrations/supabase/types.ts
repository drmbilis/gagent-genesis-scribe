export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activity_files: {
        Row: {
          activity_id: string | null
          created_at: string | null
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          uploaded_by: string | null
        }
        Insert: {
          activity_id?: string | null
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          uploaded_by?: string | null
        }
        Update: {
          activity_id?: string | null
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_files_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "commission_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_files_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_participants: {
        Row: {
          activity_id: string | null
          attendance_status: string | null
          created_at: string | null
          id: string
          member_id: string | null
          notes: string | null
        }
        Insert: {
          activity_id?: string | null
          attendance_status?: string | null
          created_at?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
        }
        Update: {
          activity_id?: string | null
          attendance_status?: string | null
          created_at?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "activity_participants_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "commission_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_participants_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      announcements: {
        Row: {
          category: string | null
          content: string
          created_at: string | null
          created_by: string | null
          expire_date: string | null
          id: string
          priority: string | null
          publish_date: string | null
          send_email: boolean | null
          send_sms: boolean | null
          status: string | null
          target_audience: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string | null
          created_by?: string | null
          expire_date?: string | null
          id?: string
          priority?: string | null
          publish_date?: string | null
          send_email?: boolean | null
          send_sms?: boolean | null
          status?: string | null
          target_audience?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string | null
          created_by?: string | null
          expire_date?: string | null
          id?: string
          priority?: string | null
          publish_date?: string | null
          send_email?: boolean | null
          send_sms?: boolean | null
          status?: string | null
          target_audience?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          campaign_type: string
          content: string
          created_at: string | null
          created_by: string | null
          id: string
          scheduled_date: string | null
          sent_count: number | null
          status: string | null
          target_group: string | null
          title: string
        }
        Insert: {
          campaign_type: string
          content: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          scheduled_date?: string | null
          sent_count?: number | null
          status?: string | null
          target_group?: string | null
          title: string
        }
        Update: {
          campaign_type?: string
          content?: string
          created_at?: string | null
          created_by?: string | null
          id?: string
          scheduled_date?: string | null
          sent_count?: number | null
          status?: string | null
          target_group?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_activities: {
        Row: {
          activity_date: string
          activity_type: string | null
          commission_id: string | null
          coordinator_id: string | null
          created_at: string | null
          description: string | null
          id: string
          location: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          activity_date: string
          activity_type?: string | null
          commission_id?: string | null
          coordinator_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          activity_date?: string
          activity_type?: string | null
          commission_id?: string | null
          coordinator_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          location?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_activities_commission_id_fkey"
            columns: ["commission_id"]
            isOneToOne: false
            referencedRelation: "commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_activities_coordinator_id_fkey"
            columns: ["coordinator_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_members: {
        Row: {
          commission_id: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          join_date: string | null
          leave_date: string | null
          member_id: string | null
          role: string | null
        }
        Insert: {
          commission_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          join_date?: string | null
          leave_date?: string | null
          member_id?: string | null
          role?: string | null
        }
        Update: {
          commission_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          join_date?: string | null
          leave_date?: string | null
          member_id?: string | null
          role?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_members_commission_id_fkey"
            columns: ["commission_id"]
            isOneToOne: false
            referencedRelation: "commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_members_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      commission_reports: {
        Row: {
          activity_id: string | null
          commission_id: string | null
          content: string | null
          created_at: string | null
          id: string
          prepared_by: string | null
          publish_date: string | null
          report_file_url: string | null
          status: string | null
          summary: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          activity_id?: string | null
          commission_id?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          prepared_by?: string | null
          publish_date?: string | null
          report_file_url?: string | null
          status?: string | null
          summary?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          activity_id?: string | null
          commission_id?: string | null
          content?: string | null
          created_at?: string | null
          id?: string
          prepared_by?: string | null
          publish_date?: string | null
          report_file_url?: string | null
          status?: string | null
          summary?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commission_reports_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "commission_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_reports_commission_id_fkey"
            columns: ["commission_id"]
            isOneToOne: false
            referencedRelation: "commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "commission_reports_prepared_by_fkey"
            columns: ["prepared_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      commissions: {
        Row: {
          chairman_id: string | null
          created_at: string | null
          duties: string | null
          establishment_date: string | null
          id: string
          name: string
          objectives: string | null
          status: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          chairman_id?: string | null
          created_at?: string | null
          duties?: string | null
          establishment_date?: string | null
          id?: string
          name: string
          objectives?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          chairman_id?: string | null
          created_at?: string | null
          duties?: string | null
          establishment_date?: string | null
          id?: string
          name?: string
          objectives?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "commissions_chairman_id_fkey"
            columns: ["chairman_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          category: string | null
          created_at: string | null
          donation_date: string
          donor_name: string
          id: string
          member_id: string | null
          notes: string | null
          payment_method: string | null
        }
        Insert: {
          amount: number
          category?: string | null
          created_at?: string | null
          donation_date: string
          donor_name: string
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_method?: string | null
        }
        Update: {
          amount?: number
          category?: string | null
          created_at?: string | null
          donation_date?: string
          donor_name?: string
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_method?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "donations_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      dues_payments: {
        Row: {
          amount: number
          created_at: string | null
          id: string
          member_id: string | null
          notes: string | null
          payment_date: string
          payment_method: string | null
          period_month: number
          period_year: number
          status: string | null
        }
        Insert: {
          amount: number
          created_at?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_date: string
          payment_method?: string | null
          period_month: number
          period_year: number
          status?: string | null
        }
        Update: {
          amount?: number
          created_at?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_date?: string
          payment_method?: string | null
          period_month?: number
          period_year?: number
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dues_payments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      event_participants: {
        Row: {
          attendance_status: string | null
          event_id: string | null
          id: string
          member_id: string | null
          notes: string | null
          payment_status: string | null
          registration_date: string | null
        }
        Insert: {
          attendance_status?: string | null
          event_id?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_status?: string | null
          registration_date?: string | null
        }
        Update: {
          attendance_status?: string | null
          event_id?: string | null
          id?: string
          member_id?: string | null
          notes?: string | null
          payment_status?: string | null
          registration_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "event_participants_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "event_participants_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      events: {
        Row: {
          category: string | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          event_date: string
          id: string
          location: string | null
          max_participants: number | null
          price: number | null
          registration_deadline: string | null
          status: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_date: string
          id?: string
          location?: string | null
          max_participants?: number | null
          price?: number | null
          registration_deadline?: string | null
          status?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          event_date?: string
          id?: string
          location?: string | null
          max_participants?: number | null
          price?: number | null
          registration_deadline?: string | null
          status?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "events_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      family_members: {
        Row: {
          birth_date: string | null
          created_at: string | null
          id: string
          member_id: string | null
          name: string
          phone: string | null
          relationship: string
        }
        Insert: {
          birth_date?: string | null
          created_at?: string | null
          id?: string
          member_id?: string | null
          name: string
          phone?: string | null
          relationship: string
        }
        Update: {
          birth_date?: string | null
          created_at?: string | null
          id?: string
          member_id?: string | null
          name?: string
          phone?: string | null
          relationship?: string
        }
        Relationships: [
          {
            foreignKeyName: "family_members_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      members: {
        Row: {
          address: string | null
          birth_date: string | null
          city: string | null
          created_at: string | null
          district: string | null
          education_level: string | null
          email: string
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          first_name: string
          gender: string | null
          id: string
          last_name: string
          marital_status: string | null
          member_number: string
          membership_date: string | null
          membership_status: string | null
          notes: string | null
          phone: string | null
          postal_code: string | null
          profession: string | null
          profile_photo_url: string | null
          role: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          address?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string | null
          district?: string | null
          education_level?: string | null
          email: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name: string
          gender?: string | null
          id?: string
          last_name: string
          marital_status?: string | null
          member_number: string
          membership_date?: string | null
          membership_status?: string | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          profession?: string | null
          profile_photo_url?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          address?: string | null
          birth_date?: string | null
          city?: string | null
          created_at?: string | null
          district?: string | null
          education_level?: string | null
          email?: string
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          first_name?: string
          gender?: string | null
          id?: string
          last_name?: string
          marital_status?: string | null
          member_number?: string
          membership_date?: string | null
          membership_status?: string | null
          notes?: string | null
          phone?: string | null
          postal_code?: string | null
          profession?: string | null
          profile_photo_url?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      notification_preferences: {
        Row: {
          announcement_notifications: boolean | null
          campaign_messages: boolean | null
          created_at: string | null
          dues_reminders: boolean | null
          email_notifications: boolean | null
          event_notifications: boolean | null
          id: string
          member_id: string | null
          push_notifications: boolean | null
          sms_notifications: boolean | null
          updated_at: string | null
        }
        Insert: {
          announcement_notifications?: boolean | null
          campaign_messages?: boolean | null
          created_at?: string | null
          dues_reminders?: boolean | null
          email_notifications?: boolean | null
          event_notifications?: boolean | null
          id?: string
          member_id?: string | null
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          updated_at?: string | null
        }
        Update: {
          announcement_notifications?: boolean | null
          campaign_messages?: boolean | null
          created_at?: string | null
          dues_reminders?: boolean | null
          email_notifications?: boolean | null
          event_notifications?: boolean | null
          id?: string
          member_id?: string | null
          push_notifications?: boolean | null
          sms_notifications?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notification_preferences_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: true
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          created_at: string
          id: string
          is_global: boolean | null
          is_read: boolean | null
          message: string
          title: string
          type: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          is_global?: boolean | null
          is_read?: boolean | null
          message: string
          title: string
          type?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          is_global?: boolean | null
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          user_id?: string | null
        }
        Relationships: []
      }
      payment_history: {
        Row: {
          amount: number
          created_at: string
          currency: string
          id: string
          payment_method: string | null
          status: string
          stripe_payment_id: string | null
          tokens_purchased: number
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string
          id?: string
          payment_method?: string | null
          status?: string
          stripe_payment_id?: string | null
          tokens_purchased: number
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string
          id?: string
          payment_method?: string | null
          status?: string
          stripe_payment_id?: string | null
          tokens_purchased?: number
          user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          email: string
          full_name: string | null
          id: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          email: string
          full_name?: string | null
          id: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          email?: string
          full_name?: string | null
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      report_comments: {
        Row: {
          comment: string
          created_at: string | null
          id: string
          member_id: string | null
          report_id: string | null
        }
        Insert: {
          comment: string
          created_at?: string | null
          id?: string
          member_id?: string | null
          report_id?: string | null
        }
        Update: {
          comment?: string
          created_at?: string | null
          id?: string
          member_id?: string | null
          report_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "report_comments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "report_comments_report_id_fkey"
            columns: ["report_id"]
            isOneToOne: false
            referencedRelation: "commission_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      support_tickets: {
        Row: {
          created_at: string
          id: string
          message: string
          priority: string
          status: string
          subject: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          priority?: string
          status?: string
          subject: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          priority?: string
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      system_status: {
        Row: {
          created_at: string
          id: string
          message: string | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      user_files: {
        Row: {
          file_name: string
          file_path: string
          file_size: number | null
          file_type: string | null
          id: string
          is_public: boolean | null
          upload_date: string
          user_id: string
        }
        Insert: {
          file_name: string
          file_path: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_public?: boolean | null
          upload_date?: string
          user_id: string
        }
        Update: {
          file_name?: string
          file_path?: string
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_public?: boolean | null
          upload_date?: string
          user_id?: string
        }
        Relationships: []
      }
      user_tokens: {
        Row: {
          balance: number
          created_at: string
          id: string
          last_purchase_date: string | null
          total_purchased: number
          total_used: number
          updated_at: string
          user_id: string
        }
        Insert: {
          balance?: number
          created_at?: string
          id?: string
          last_purchase_date?: string | null
          total_purchased?: number
          total_used?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          balance?: number
          created_at?: string
          id?: string
          last_purchase_date?: string | null
          total_purchased?: number
          total_used?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      generate_member_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

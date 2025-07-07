export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
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
      audit_logs: {
        Row: {
          action: string
          created_at: string | null
          id: string
          ip_address: unknown | null
          new_values: Json | null
          old_values: Json | null
          record_id: string | null
          table_name: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string | null
          id?: string
          ip_address?: unknown | null
          new_values?: Json | null
          old_values?: Json | null
          record_id?: string | null
          table_name?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      blog_posts: {
        Row: {
          author_id: string | null
          category: string | null
          content: string
          created_at: string
          excerpt: string | null
          featured_image_url: string | null
          id: string
          is_featured: boolean | null
          published_at: string | null
          slug: string
          status: string | null
          title: string
          updated_at: string
          view_count: number | null
        }
        Insert: {
          author_id?: string | null
          category?: string | null
          content: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_featured?: boolean | null
          published_at?: string | null
          slug: string
          status?: string | null
          title: string
          updated_at?: string
          view_count?: number | null
        }
        Update: {
          author_id?: string | null
          category?: string | null
          content?: string
          created_at?: string
          excerpt?: string | null
          featured_image_url?: string | null
          id?: string
          is_featured?: boolean | null
          published_at?: string | null
          slug?: string
          status?: string | null
          title?: string
          updated_at?: string
          view_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "blog_posts_author_id_fkey"
            columns: ["author_id"]
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
      guide_tours: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          page_name: string
          step_data: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          page_name: string
          step_data: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          page_name?: string
          step_data?: Json
          updated_at?: string
        }
        Relationships: []
      }
      media_gallery: {
        Row: {
          category: string | null
          commission_id: string | null
          created_at: string
          description: string | null
          event_id: string | null
          file_type: string
          file_url: string
          id: string
          is_featured: boolean | null
          title: string
          uploaded_by: string | null
        }
        Insert: {
          category?: string | null
          commission_id?: string | null
          created_at?: string
          description?: string | null
          event_id?: string | null
          file_type: string
          file_url: string
          id?: string
          is_featured?: boolean | null
          title: string
          uploaded_by?: string | null
        }
        Update: {
          category?: string | null
          commission_id?: string | null
          created_at?: string
          description?: string | null
          event_id?: string | null
          file_type?: string
          file_url?: string
          id?: string
          is_featured?: boolean | null
          title?: string
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "media_gallery_commission_id_fkey"
            columns: ["commission_id"]
            isOneToOne: false
            referencedRelation: "commissions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_gallery_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "media_gallery_uploaded_by_fkey"
            columns: ["uploaded_by"]
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
      order_items: {
        Row: {
          created_at: string
          event_id: string | null
          id: string
          item_type: string
          name: string
          order_id: string | null
          price: number
          product_id: string | null
          quantity: number
          ticket_category_id: string | null
          total: number
        }
        Insert: {
          created_at?: string
          event_id?: string | null
          id?: string
          item_type: string
          name: string
          order_id?: string | null
          price?: number
          product_id?: string | null
          quantity?: number
          ticket_category_id?: string | null
          total?: number
        }
        Update: {
          created_at?: string
          event_id?: string | null
          id?: string
          item_type?: string
          name?: string
          order_id?: string | null
          price?: number
          product_id?: string | null
          quantity?: number
          ticket_category_id?: string | null
          total?: number
        }
        Relationships: [
          {
            foreignKeyName: "order_items_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_order_id_fkey"
            columns: ["order_id"]
            isOneToOne: false
            referencedRelation: "orders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "order_items_ticket_category_id_fkey"
            columns: ["ticket_category_id"]
            isOneToOne: false
            referencedRelation: "ticket_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      orders: {
        Row: {
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          member_id: string | null
          notes: string | null
          order_number: string
          order_status: string | null
          payment_method: string | null
          payment_status: string | null
          phone: string | null
          stripe_payment_intent_id: string | null
          stripe_session_id: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          member_id?: string | null
          notes?: string | null
          order_number: string
          order_status?: string | null
          payment_method?: string | null
          payment_status?: string | null
          phone?: string | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          member_id?: string | null
          notes?: string | null
          order_number?: string
          order_status?: string | null
          payment_method?: string | null
          payment_status?: string | null
          phone?: string | null
          stripe_payment_intent_id?: string | null
          stripe_session_id?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orders_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
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
      products: {
        Row: {
          category: string
          created_at: string
          description: string | null
          digital_file_url: string | null
          featured_image_url: string | null
          gallery_images: Json | null
          id: string
          is_featured: boolean | null
          manage_stock: boolean | null
          name: string
          price: number
          product_type: string
          sale_price: number | null
          short_description: string | null
          slug: string
          status: string | null
          stock_quantity: number | null
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          digital_file_url?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          id?: string
          is_featured?: boolean | null
          manage_stock?: boolean | null
          name: string
          price?: number
          product_type?: string
          sale_price?: number | null
          short_description?: string | null
          slug: string
          status?: string | null
          stock_quantity?: number | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          digital_file_url?: string | null
          featured_image_url?: string | null
          gallery_images?: Json | null
          id?: string
          is_featured?: boolean | null
          manage_stock?: boolean | null
          name?: string
          price?: number
          product_type?: string
          sale_price?: number | null
          short_description?: string | null
          slug?: string
          status?: string | null
          stock_quantity?: number | null
          updated_at?: string
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
      site_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_public: boolean | null
          setting_key: string
          setting_type: string | null
          setting_value: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key: string
          setting_type?: string | null
          setting_value?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_public?: boolean | null
          setting_key?: string
          setting_type?: string | null
          setting_value?: string | null
          updated_at?: string
        }
        Relationships: []
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
      survey_invitations: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          invitation_token: string
          member_id: string | null
          responded_at: string | null
          sent_at: string | null
          survey_id: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id?: string
          invitation_token?: string
          member_id?: string | null
          responded_at?: string | null
          sent_at?: string | null
          survey_id?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          invitation_token?: string
          member_id?: string | null
          responded_at?: string | null
          sent_at?: string | null
          survey_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "survey_invitations_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_invitations_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      survey_responses: {
        Row: {
          id: string
          is_completed: boolean | null
          member_id: string | null
          response_token: string
          responses: Json
          submitted_at: string | null
          survey_id: string | null
        }
        Insert: {
          id?: string
          is_completed?: boolean | null
          member_id?: string | null
          response_token: string
          responses?: Json
          submitted_at?: string | null
          survey_id?: string | null
        }
        Update: {
          id?: string
          is_completed?: boolean | null
          member_id?: string | null
          response_token?: string
          responses?: Json
          submitted_at?: string | null
          survey_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "survey_responses_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "survey_responses_survey_id_fkey"
            columns: ["survey_id"]
            isOneToOne: false
            referencedRelation: "surveys"
            referencedColumns: ["id"]
          },
        ]
      }
      surveys: {
        Row: {
          allow_anonymous: boolean | null
          created_at: string | null
          created_by: string | null
          description: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          questions: Json
          title: string
          updated_at: string | null
        }
        Insert: {
          allow_anonymous?: boolean | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          questions?: Json
          title: string
          updated_at?: string | null
        }
        Update: {
          allow_anonymous?: boolean | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          questions?: Json
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "surveys_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "members"
            referencedColumns: ["id"]
          },
        ]
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
      ticket_categories: {
        Row: {
          created_at: string
          description: string | null
          event_id: string | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          quantity: number
          sold_quantity: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          price?: number
          quantity?: number
          sold_quantity?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          event_id?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          quantity?: number
          sold_quantity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ticket_categories_event_id_fkey"
            columns: ["event_id"]
            isOneToOne: false
            referencedRelation: "events"
            referencedColumns: ["id"]
          },
        ]
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
      user_roles: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
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
      user_tour_progress: {
        Row: {
          completed_steps: Json
          created_at: string
          id: string
          is_completed: boolean
          last_step: number
          page_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_steps?: Json
          created_at?: string
          id?: string
          is_completed?: boolean
          last_step?: number
          page_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_steps?: Json
          created_at?: string
          id?: string
          is_completed?: boolean
          last_step?: number
          page_name?: string
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
      generate_order_number: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_guide_tour: {
        Args: { p_page_name: string }
        Returns: {
          id: string
          page_name: string
          step_data: Json
          is_active: boolean
        }[]
      }
      get_user_role: {
        Args: Record<PropertyKey, never> | { user_uuid?: string }
        Returns: string
      }
      is_admin_or_moderator: {
        Args: Record<PropertyKey, never> | { user_uuid?: string }
        Returns: boolean
      }
      is_current_user_admin: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      update_tour_progress: {
        Args: {
          p_page_name: string
          p_completed_steps: string
          p_last_step: number
          p_is_completed: boolean
        }
        Returns: undefined
      }
    }
    Enums: {
      app_role: "Yönetici" | "Moderatör" | "Üye"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
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
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["Yönetici", "Moderatör", "Üye"],
    },
  },
} as const
